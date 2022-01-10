import { Modal } from 'antd';
import { CalendarDataType } from '../Calendar/utilities';
import AddEventForm from '../Forms/AddEventForm';

type AddEventModalProps = {
    visible: boolean;
    selectedItem: CalendarDataType;
    setEventModalVisibility: (visibilityState: boolean) => void;
    setEventTitle: (formData: any, selectedItem: CalendarDataType) => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({ 
    visible, 
    selectedItem, 
    setEventModalVisibility, 
    setEventTitle 
}) => {
    const setEventTitleForSelectedItem = (formData: any) => {
        setEventTitle(formData, selectedItem);
    }
    const modalTitle = `January, ${selectedItem.day}`
    return (
        <Modal
          visible={visible}
          title={modalTitle}          
          footer={null}
          destroyOnClose
          onCancel={() => setEventModalVisibility(false)}
        >
            <AddEventForm selectedItem={selectedItem} setEventTitleForSelectedItem={setEventTitleForSelectedItem} />
        </Modal>
    )
}

export default AddEventModal;