import { useState } from "react";

export default function WhatsappModal({show, onClose}) {

    const [formData, setFormData] = useState({
        nombre: '',
        remito: '',
        producto: '',
        consulta: ''
    })

    const changeHandler = event => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
          }));
    }

    const submitHandler = event => {
        event.preventDefault();
        const baseURI = 'https://wa.me/542804566096/?text='
        let text = ``

        if(formData.remito)
            text = text.concat(
                `*Nº Remito*: ${formData.remito}\n`
            )
        if(formData.nombre)
            text = text.concat(
                `*Cliente*: ${formData.nombre}\n`
            )
        if(formData.producto)
            text = text.concat(
                `*Producto*: ${formData.producto}\n`
            )

        text = text.concat(`\n${formData.consulta}`)
        
        const URI = baseURI + encodeURIComponent(text)
        window.open(URI, '_blank')
    }

    return (
        <>
        {show && <div className="mask" onClick={onClose}></div>}
        <div className={`modal-whatsapp ${!show && 'd-none'}`}>
            <button className="close-btn" onClick={onClose}><i className="fa fa-times" aria-hidden="true"></i></button>
            <div>
                <h3>Consulta rápida por WhatsApp</h3>
                <p>Este formulario generará un mensaje para enviarnos (se abrirá WhatsApp con el mensaje armado y listo para enviar).</p>
                <p>Si bien algunos campos son opcionales, ingrese toda la información posible para obtener una mejor respuesta.</p>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <label>Nombre</label>
                <input type="text" name="nombre" required value={formData.nombre} onChange={changeHandler}></input>
                <label>Nº de remito <span className="optional">(opcional)</span></label>
                <input type="number" name="remito" value={formData.remito} onChange={changeHandler} placeholder="Número provisto al llevar su producto"></input>
                <label>Producto <span className="optional">(opcional)</span></label>
                <input type="text" name="producto" value={formData.producto} placeholder="ej: LED Samsung T4300" onChange={changeHandler}></input>

                <label>Consulta</label>
                <textarea value={formData.consulta} name="consulta" onChange={changeHandler} required placeholder="ej: Hola, ¿ya está mi producto disponible para su retiro?" rows={10}></textarea>
                <button type="submit" className="btn send-btn">
                    <i className="fa fa-whatsapp" aria-hidden="true" style={{ fontSize: '1.3rem' }}></i> Enviar
                </button>
            </form>
        </div>
        </>
    );
  }
  