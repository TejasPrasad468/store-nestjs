"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function login() {

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitData = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    // console.log("Phone:", phone);
    console.log("Password:", password);

    // Example API call
    // const res = await fetch("http://localhost:3000/api/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, phone, password }),
    // });
    // const data = await res.json();
    // console.log("Response:", data);
    router.push('/products');
    setUsername("");
    setPassword("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form className="space-y-6" onSubmit={submitData}>
                    <div>
                        <input placeholder="Username" type="username" id="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <input placeholder="Password" type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"  value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">Login</button>
                </form>
				<p className="text-sm text-center text-gray-500 mt-6">
					Don't have an account?{" "}
					<a href="/" className="text-blue-600 hover:underline">
						Sign up
					</a>
				</p>
            </div>
        </div>
    );
};
