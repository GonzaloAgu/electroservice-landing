
export default function WhatsappModal({show, onClose}) {
    return (
        <>
        {show && <div className="mask"></div>}
        <div className={`modal-whatsapp ${!show && 'd-none'}`}>
            <button className="close-btn" onClick={onClose}>X</button>
            <div>
                <h3>Consulta rápida por WhatsApp</h3>
                <p>Este formulario generará un mensaje para enviarnos por WhatsApp (se abrirá WhatsApp con el mensaje armado).</p>
                <p>Si bien los campos son opcionales, ingrese toda la información posible para obtener una mejor respuesta.</p>
            </div>
            <div className="form">
                <label>Nº de remito</label>
                <input type="number"></input>
                <label>Tipo de producto</label>
                <input type="text" placeholder="ej: televisor"></input>
                <label>Marca y modelo</label>
                <input type="text" placeholder="ej: Samsung T4300"></input>
            </div>
        </div>
        </>
    );
  }
  