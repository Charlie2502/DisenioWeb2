import React, { useState } from 'react';
import Swal from 'sweetalert2';
import * as cardValidator from 'card-validator';
 
const PaymentForm = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
 
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
 
    // Validar que no haya campos en blanco
    if (!cardHolderName || !cardNumber || !expiryDate || !cvc) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Incompletos',
        text: 'Por favor, completa todos los campos del formulario.',
      });
      return;
    }
 
    // Validar número de tarjeta con card-validator
    const cardNumberValidation = cardValidator.number(cardNumber);
    if (!cardNumberValidation.isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Número de Tarjeta Inválido',
        text: 'Por favor, ingresa un número de tarjeta válido.',
      });
      return;
    }
 
    // Validar fecha de vencimiento
    const expiryDateValidation = cardValidator.expirationDate(expiryDate);
    if (!expiryDateValidation.isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Fecha de Vencimiento Inválida',
        text: 'Por favor, ingresa una fecha de vencimiento válida.',
      });
      return;
    }
 
    // Aquí puedes realizar la lógica de procesamiento de pago simulado
    Swal.fire({
      icon: 'success',
      title: 'Pago Exitoso',
      text: 'El pago ha sido procesado exitosamente.',
    });
  };
 
  return (
<div>
<h2>Formulario de Pago</h2>
<form onSubmit={handlePaymentSubmit}>
<label>
          Nombre del Portador:
<input
            type="text"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
</label>
<br />
<label>
          Numero de Tarjeta:
<input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
</label>
<br />
<label>
          Fecha de Vencimiento:
<input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
</label>
<br />
<label>
          CVC:
<input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
</label>
<br />
<button type="submit">Pagar</button>
</form>
</div>
  );
};
 
export default PaymentForm;