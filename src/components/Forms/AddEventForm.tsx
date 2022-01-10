import { Form, Input, Button } from 'antd';
import { useEffect } from 'react';
import { CalendarDataType } from '../Calendar/utilities';

type AddEventFormProps = {
    setEventTitleForSelectedItem: (formData: any) => void;
    selectedItem: CalendarDataType;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ setEventTitleForSelectedItem, selectedItem }) => {
    const [form] = Form.useForm();
    const saveData = (formData: any): void => {       
        setEventTitleForSelectedItem(formData);
    }
    useEffect(() => {
        if (selectedItem.event) {
            console.log(selectedItem.event);
            form.setFieldsValue({ eventTitle: selectedItem.event})
        }
    }, [selectedItem, form]);

    return (
        <Form name="addEventForm" form={form} validateTrigger="onBlur" onFinish={saveData}>
            <Form.Item
                name="eventTitle"                
                rules={[{ required: true, message: 'Please input event title!' }]}
            >
                <Input placeholder="Event Title" />
            </Form.Item>
            <Form.Item
                name="location"                
            >
                <Input placeholder="location(optional)" />
            </Form.Item>
            <Button type='primary' htmlType='submit'>Save</Button>
        </Form>
    )
}

export default AddEventForm;