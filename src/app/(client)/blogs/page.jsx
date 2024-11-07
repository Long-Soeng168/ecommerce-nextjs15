import MyBlogList from '@/components/my-blog-list'
import MyHeading from '@/components/ui/my-heading'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-4 my-8 mt-16">
        <MyHeading
          title="From the community"
          description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
        />
        <MyBlogList />
        <MyBlogList />
      </div>
    </>
  )
}

export default Page
