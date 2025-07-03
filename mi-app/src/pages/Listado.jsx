import { useEffect, useState } from 'react';
import { Table, Spin, message } from 'antd';

export default function Listado() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
    },
    {
      title: 'Categoría',
      dataIndex: 'categoria',
      key: 'categoria',
    },
    {
      title: 'Contenido',
      dataIndex: 'contenido',
      key: 'contenido',
    },
  ];

  useEffect(() => {
    // Define el body de la petición POST (filtros o vacío)
    const filtros = {}; // si no tienes filtros, déjalo vacío {}

    fetch('https://nestjs-blog-backend-api.desarrollo-software.xyz/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filtros),
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener publicaciones');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        message.error('No se pudo cargar el listado');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <h2>Listado de Posts</h2>

      {loading ? (
        <Spin />
      ) : (
        <Table
          dataSource={posts}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          locale={{ emptyText: 'No hay posts para mostrar' }}
        />
      )}
    </div>
  );
}
