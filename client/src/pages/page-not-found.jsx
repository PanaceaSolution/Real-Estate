import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
   return (
      <div class="flex items-center justify-center min-h-screen px-2">
         <div class="text-center">
            <h1 class="text-[200px] font-bold">404</h1>
            <p class="text-2xl font-medium">Oops! Page not found</p>
            <p class="mt-4 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <Button>
               <Link to="/">Go Home</Link>
            </Button>
         </div>
      </div>
   )
}

export default PageNotFound