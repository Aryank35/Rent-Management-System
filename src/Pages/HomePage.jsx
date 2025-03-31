import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">🏠 House Rent Management</h1>
        <p className="text-lg text-gray-600 mb-8">Manage your tenants and rent payments effortlessly.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => navigate('/new-tenant')}
            className="bg-purple-500 text-white py-3 rounded-lg text-lg font-bold hover:scale-105 transition-transform duration-300">
            ➕ Add New Tenant
          </button>

          <button 
            onClick={() => navigate('/rent-status')}
            className="bg-blue-500 text-white py-3 rounded-lg text-lg font-bold hover:scale-105 transition-transform duration-300">
            💰 View Rent Status
          </button>
        </div>
      </div>
    </div>
  );
}
