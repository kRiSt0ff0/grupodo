import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+523310978830', '_blank'); // Reemplaza con tu número de WhatsApp
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </div>
  );
};

export default WhatsAppButton;