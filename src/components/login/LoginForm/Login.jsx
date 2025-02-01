import React, { useState } from 'react'

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

  return (
    <>
        <form className="space-y-4 max-h-[65vh] overflow-auto px-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="example@email.com" required className="w-full p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400" onChange={handleChange("email")} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        required
                        value={formData.password}
                        onChange={handleChange("password")}
                        className="w-full p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400"
                    />
                </div>
                <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Log In
                </button>
            </form>
    </>
  )
}

export default Login