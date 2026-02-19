import React from 'react';
import { RECENT_ORDERS } from '../../constants';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="bg-kasa-green/10 text-kasa-green text-xs font-bold px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ventas Netas</h3>
          <p className="text-2xl font-black mt-1 text-slate-900">$4.250.000</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <span className="material-symbols-outlined">shopping_cart</span>
            </div>
            <span className="bg-kasa-green/10 text-kasa-green text-xs font-bold px-2 py-1 rounded-full">+8.2%</span>
          </div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pedidos</h3>
          <p className="text-2xl font-black mt-1 text-slate-900">1.240</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <span className="bg-kasa-red/10 text-kasa-red text-xs font-bold px-2 py-1 rounded-full">-2.1%</span>
          </div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ticket Promedio</h3>
          <p className="text-2xl font-black mt-1 text-slate-900">$3.427</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                <span className="material-symbols-outlined">group</span>
            </div>
            <span className="bg-kasa-green/10 text-kasa-green text-xs font-bold px-2 py-1 rounded-full">+5.4%</span>
          </div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nuevos Clientes</h3>
          <p className="text-2xl font-black mt-1 text-slate-900">458</p>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-lg text-slate-900">Pedidos Recientes</h3>
          <button className="text-primary text-sm font-bold hover:underline">Ver todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">ID Pedido</th>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4 text-right">Total</th>
                <th className="px-6 py-4 text-center">Estado</th>
                <th className="px-6 py-4 text-center">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                            {order.customer.charAt(0)}
                        </div>
                        <span className="font-medium">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                  <td className="px-6 py-4 text-right font-bold">${order.total.toLocaleString('es-AR')}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-700 border-green-200' :
                      order.status === 'shipped' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                      'bg-orange-100 text-orange-700 border-orange-200'
                    }`}>
                      {order.status === 'delivered' ? 'Entregado' : order.status === 'shipped' ? 'Enviado' : 'Pendiente'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};