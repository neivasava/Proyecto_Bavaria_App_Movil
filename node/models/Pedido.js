const { Schema, model } = require('mongoose');

const PedidoSchema = new Schema({

    Shipment_ID:{
        type: String,
        require: true
    },
    Load_ID:{
        type: String,
        require: true
    },
    Validador:{
        type: String,
        require: true
    },
    Trip_ID:{
        type: Number,
        require: true
    },
    Trip_Sequence_Number:{
        type: String,
        require: true
    },
    Shipment_Origin_Location_ID:{
        type: String,
        require: true
    },
    Origin_Location_Name:{
        type: String,
        require: true
    },
    Shipment_Destination_Location_ID:{
        type: String,
        require: true
    },
    Destination_Location_Name:{
        type: String,
        require: true
    },
    Load_Carrier_ID:{
        type: Number,
        require: true
    },
    Load_Carrier_Name:{
        type: String,
        require: true
    },
    Load_Service_ID:{
        type: String,
        require: true
    },
    Load_Tractor_Equipment_Type:{
        type: String,
        require: true
    },
    SQL_Equipment:{
        type: String,
        require: true
    },
    Shipment_Pallets:{
        type: String,
        require: true
    },
    Shipment_Weight_KG:{
        type: String,
        require: true
    },
    Shipment_Volume_CU_M:{
        type: String,
        require: true
    },
    Order_Value_COP:{
        type: String,
        require: true
    },
    Load_Start_Date_Time_DD_MM_YYYY_HH_MM:{
        type: Date,
        require: true
    },
    Dock_Pickup:{
        type: String,
        require: true
    },
    Load_End_Date_Time_DD_MM_YYYY_HH_MM:{
        type: Date,
        require: true
    },
    Dock_Dropoff:{
        type: String,
        require: true
    },
    Reliable_dock_booking:{
        type: Boolean,
        require: true
    },
    Shipment_Commodity:{
        type: String,
        require: true
    },
    Shipment_Priority:{
        type: Number,
        require: true
    },
    Domicile_ID:{
        type: String,
        require: true
    },
    Vehicle_ID:{
        type: String,
        require: true
    },
    Domicile_Start_Date_Time_DD_MM_YYYY_HH_MM:{
        type: Date,
        require: true
    },
    Domicile_End_Date_Time_DD_MM_YYYY_HH_MM:{
        type: Date,
        require: true
    },
    Productos:[{
        SKU: {
            type: Number,
            require: true
        },
        SKU2: {
            type: String,
            require: true
        },
        TIPO_DE_PROD: {
            type: String,
            require: true
        },
        PRESENTAION: {
            type: String,
            require: true
        },
        X_CANT: {
            type: String,
            require: true
        },
        Pallets:{
            type: Number,
            require: true
        }
        
    }],
    Volume:{
        type: Number,
        require: true
    },
    Weight:{
        type: Number,
        require: true
    },
    QTY_of_units:{
        type: Number,
        require: true
    },
    SQL_vs_TMS_equipment:{
        type: String,
        require: true
    },
    Origen:{
        type: String,
        require: true
    },
    Destino:{
        type: String,
        require: true
    },
    Tipo_de_Vh:{
        type: String,
        require: true
    },
    Fecha:{
        type: Date,
        default: Date.now,
        require: true
    },
    Hora:{
        type: Date,
        default: Date.now,
        require: true
    },
    Load_Service:{
        type: String,
        require: true
    }, 
    Prioridad:{
        type: String,
        require: true
    },
    Viaje:{
        type: Boolean,
        require: true
    },
    LOAD_SAP:{
        type: Number,
        require: true
    },
    Secuencia:{
        type: String,
        require: true
    },
    En_capacidad_del_CD:{
        type: String,
        require: true
    },
    ID_vehiculo:{
        type: String,
        require: true
    },
    Fecha_Arribo:{
        type: Date,
        require: true
    },
    Revision2:{
        type: String,
        require: true
    },
    Si_debe_recoger_producto:{
        type: String,
        require: true
    },
    IDENTIFICACIÓN:{
        type: String,
        require: true
    },
    LLAVE:{
        type: String,
        require: true
    },
    
    IDENTIFICACIÓN1:{
        type: String,
        require: true
    },
    HL:{
        type: Number,
        require: true
    },
    IDENTIFICACIÓN2:{
        type: String,
        require: true
    },
    TIPO:{
        type: String,
        require: true
    },
    llave:{
        type: String,
        require: true
    },
    Tarifa:{
        type: Number,
        require: true
    },
    



   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    ID_Origen:{
        type: String,
        require: true
    },
    Origen:{
        type: String,
        require: true
    },
    ID_Destino:{
        type: String,
        require: true
    },
    Destino:{
        type: String,
        require: true
    },
    
    Peso_Carga_General:{
        type: String,
        require: true
    },
    Tipo_Vehiculo_SAP:{
        type: String,
        require: true
    },
    Tipo_Vehiculo_Nombre:{
        type: String,
        require: true
    },
    TIPO_DE_PROD:{
        type: String,
        require: true
    },
    Placa_Vehiculo:{
        type: String,
        require: true
    },
    SKU:{
        type: String,
        require: true
    },
    SKU2:{
        type: String,
        require: true
    },
    Estibas:{
        type: String,
        require: true
    },
    Numero_Unidades:{
        type: String,
        require: true
    },
    Lote:{
        type: String,
        require: true
    },
    Fecha_Vencimiento:{
        type: Date,
        default: Date.now,
        require: true
    },
    Hora_Produccion:{
        type: Date,
        default: Date.now,
        require: true
    },
    Fotos:[{
        filepath: {
            type: String,
            require: true
        },
        webviewPath: {
            type: String,
            require: true
        }
        
    }],
    FotosList:[{
        filepath: {
            type: String,
            require: true
        },
        webviewPath: {
            type: String,
            require: true
        }
        
    }],
    CheckList:[{
        val: {
            type: String,
            require: true
        },
        isChecked: {
            type: Boolean,
            require: true
        }
        
    }],

   

    ProductosList:[{
        SKU: {
            type: Number,
            require: true
        },
        SKU2: {
            type: String,
            require: true
        },
        TIPO_DE_PROD: {
            type: String,
            require: true
        },
        PRESENTAION: {
            type: String,
            require: true
        },
        X_CANT: {
            type: String,
            require: true
        }
        
    }],

    

    Numero_Estibas_list:[{
        Numero: {
            type: Number,
            require: true
        }
    }],

    Rol_list:[{
        nameRol: {
            type: String
        }
    }],

   

    EMPTY:{
        type: String,
        require: true
    }

});

module.exports = model('pedido', PedidoSchema);


