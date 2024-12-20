// pages/404.js
export default function Custom404() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-2">
            The page you are looking for doesn t exist or has been moved.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }
  