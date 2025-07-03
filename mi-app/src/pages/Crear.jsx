import { Form, Input, Button, Select, message } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

export default function Crear() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Post enviado:', values);

    // Simular creación
    message.success('Post creado correctamente.');

    // Limpiar formulario
    form.resetFields();
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Crear Nueva Publicación</h2>

      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item label="Título" name="titulo"
          rules={[{ required: true, message: 'Por favor ingrese un título' }]}>
          <Input placeholder=" " />
        </Form.Item>

        <Form.Item label="Categoría" name="categoria"
          rules={[{ required: true, message: 'Seleccione una categoría' }]}>
          <Select placeholder="Seleccione una categoría">
            <Option value="Noticias">Noticias</Option>
            <Option value="Tutorial">Actualizaciones</Option>
            <Option value="Opinion">Eventos</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Contenido" name="contenido"
          rules={[{ required: true, message: 'Ingrese un contenido' }]}>
          <TextArea rows={4} placeholder="Escriba el contenido aquí..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"> Crear </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
