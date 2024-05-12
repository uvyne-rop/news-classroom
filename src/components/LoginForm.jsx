// // import React, { useState } from 'react';

// // function Login() {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [loggedIn, setLoggedIn] = useState(false);
// //     const [error, setError] = useState('');

// //     const handleLogin = (e) => {
// //         e.preventDefault();
// //         // Here you can implement the logic to check credentials
// //         // For simplicity, I'm using hardcoded credentials
// //         if (email === 'user@example.com' && password === 'password') {
// //             setLoggedIn(true);
// //             setError('');
// //         } else {
// //             setLoggedIn(false);
// //             setError('Invalid email or password');
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //             <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
// //                 {loggedIn ? (
// //                     <div>
// //                         <h2 className="text-xl font-semibold mb-4">You are logged in!</h2>
// //                         {/* Display full news content here */}
// //                     </div>
// //                 ) : (
// //                     <form onSubmit={handleLogin}>
// //                         <h2 className="text-xl font-semibold mb-4">Login</h2>
// //                         {error && <p className="text-red-500 mb-4">{error}</p>}
// //                         <div className="mb-4">
// //                             <label htmlFor="email" className="block text-gray-700">Email</label>
// //                             <input type="email" id="email" className="form-input mt-1 block w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //                         </div>
// //                         <div className="mb-6">
// //                             <label htmlFor="password" className="block text-gray-700">Password</label>
// //                             <input type="password" id="password" className="form-input mt-1 block w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //                         </div>
// //                         <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
// //                     </form>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default Login;



// import React, { useState } from 'react';


// function LoginForm({ onClose }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Implement login logic here
//         // For simplicity, I'm leaving it empty
//         // You can add your login logic to check the credentials
//     };

//     return (
//         <div className="login-form fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-8 rounded-lg">
//                 <h2 className="text-2xl font-semibold mb-4">Login</h2>
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700">Email</label>
//                         <input type="email" id="email" className="form-input mt-1 block w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="password" className="block text-gray-700">Password</label>
//                         <input type="password" id="password" className="form-input mt-1 block w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     </div>
//                     <div className="flex justify-between items-center">
//                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
//                         <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default LoginForm;
