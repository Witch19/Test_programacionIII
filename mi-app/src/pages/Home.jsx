import { Card, Col, Row, Alert, Typography } from 'antd';
import Carusel from '../components/Carusel.jsx';

const { Title, Paragraph } = Typography;

const tarjetas = [
    {
        titulo: 'Ver Publicaciones',
        descripcion: 'Consulta todas las publicaciones.',
    },
    {
        titulo: 'Crear Nuevo Post',
        descripcion: 'Agrega una nueva publicación.',
    },
    {
        titulo: 'Estadisticas',
        descripcion: 'Analiza la información de tus publicaciones.',
    },
];
export default function Posts() {
    return (
        <div style={{ padding: '24px' }}>
            <Card style={{ marginBottom: '24px', backgroundColor: '#f5f5f5' }}>
                <Title level={2}>Bienvenido al Modulo de Posts</Title>
                <Paragraph>
                    Este sistema permite listar, crear y analizar publicaciones.
                </Paragraph>
            </Card>

            <Carusel />

            <Row gutter={16} style={{ marginBottom: '24px' }}>
                {tarjetas.map((t, idx) => (
                    <Col xs={24} md={8} key={idx}>
                        <Card title={t.titulo} bordered={true}>
                            <p>{t.descripcion}</p>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Alert message="Recuerda: Cada post debe tener titulo y contenido" type="success" showIcon style={{ marginBottom: '12px' }} />

        </div>
    );
}


