import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";

// Helper function for fetching with token auth
// Helper function for fetching with token auth
const fetchWithToken = (url, token, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };

  return fetch(url, { ...options, headers }).then(async (res) => {
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.status = res.status;
      error.info = await res.json();
      throw error;
    }
    return res.json();
  });
};

const BASE_URL = process.env.BASE_API_URL || "http://127.0.0.1:8000/api";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const {
    data: user,
    error,
    mutate,
  } = useSWR(token ? `${BASE_URL}/user` : null, () =>
    fetchWithToken(`${BASE_URL}/user`, token)
  );

  const register = async ({ setErrors, ...props }) => {
    setErrors([]);

    try {
      await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props),
      });
      mutate();
    } catch (error) {
      if (error.status === 422) setErrors(error.info.errors);
      else throw error;
    }
  };

  const login = async ({ setErrors, setStatus, ...props }) => {
    setErrors([]); // Reset any previous errors
    setStatus(null); // Reset the status message

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props), // Body content as props passed to the function
      });

      // Check if the response is successful (status in the range of 200–299)
      if (!res.ok) {
        // If not, throw an error to be handled in the catch block
        const errorData = await res.json();
        throw new Error(errorData.message || "An unexpected error occurred.");
      }

      const data = await res.json();

      // If successful, save the token and update user data
      localStorage.setItem("token", data.token);
      mutate();

      // Optionally set status to notify success
      setStatus("Login successful!");
    } catch (error) {
      // Check if we have validation errors
      if (error.message.includes("422")) {
        setErrors(error.info.errors);
      } else {
        // For general errors, set a generic error message
        setErrors([error.message || "An unexpected error occurred."]);
      }

      // Optionally return or log the error for debugging
      console.error("Login failed:", error);
    }
  };

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    setErrors([]);
    setStatus(null);

    try {
      const res = await fetch(`${BASE_URL}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      if (error.status === 422) setErrors(error.info.errors);
      else throw error;
    }
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    setErrors([]);
    setStatus(null);

    try {
      const res = await fetch(`${BASE_URL}/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: params.token, ...props }),
      });
      const data = await res.json();
      router.push(`/login?reset=${btoa(data.message)}`);
    } catch (error) {
      if (error.status === 422) setErrors(error.info.errors);
      else throw error;
    }
  };

  const resendEmailVerification = async ({ setStatus }) => {
    try {
      const res = await fetch(`${BASE_URL}/email/verification-notification`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("token");
      mutate(null);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated);
    }

    if (
      window.location.pathname === "/verify-email" &&
      user?.email_verified_at
    ) {
      router.push(redirectIfAuthenticated);
    }

    if (middleware === "auth" && error) logout();
  }, [user, error]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
