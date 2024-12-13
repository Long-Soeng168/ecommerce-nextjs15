"use client";

import PDFViewer from '@/components/pdf-viewer'
import React from 'react'


const Page = () => {
  return (
    <div>
    <PDFViewer/>
    <PDFViewer pdfUrl='https://admin.thnal.org/sample.pdf'/>
    </div>
  )
}

export default Page
