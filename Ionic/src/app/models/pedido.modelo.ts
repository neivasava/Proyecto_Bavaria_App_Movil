import { ChecklistPage } from "../despacho/checklist/checklist.page";


export interface Pedido {

    _id: string,
    ID_Origen:Number,
    Origen:String,
    ID_Destino:String,
    Destino:String,
    Peso_Carga_General:String,
    Tipo_Vehiculo_SAP:String,
    Tipo_Vehiculo_Nombre:Number,
    Placa_Vehiculo:Number,
    SKU2:String,
    Estibas:String,
    Numero_Unidades:String,
    Lote:String,
    Fecha_Vencimiento:Date,
    Hora_Produccion:Date,
    Fotos: dataFotos[],
    FotosList: dataFotosList[],
    CheckList: dataChecklist[] ,
    Productos: dataProductos[],
    ProductosList: dataProductosList[],
    Tipo_de_Vh_list: dataTipo_vehiculo[],
    Numero_Estibas_list: dataNumeroEstibasList[],
    Rol_list: dataRolList[],
    Permisos: boolean
    
}

export interface dataPedidoJson {
    
    data: Pedido;

}


export interface dataFotos {
    
    filepath: string,
    webviewPath: string

}

export interface dataFotosList {
    
    filepath: string,
    webviewPath: string

}

export interface dataProductos {
    
    SKU: Number,
    Producto: String

}

export interface dataProductosList {
    
    SKU: Number,
    SKU2: String,
    TIPO_DE_PROD: String,
    PRESENTAION: String,
    X_CANT: String,
    Pallets:Number

}

export interface dataTipo_vehiculo{
    Tipo_de_Vehiculo:String
}

export interface dataNumeroEstibasList {
    
    Numero: Number

}

export interface dataRolList {
    
    nameRol: String

}

export interface dataChecklist {
    
    val: string,
    isChecked: boolean

}

export interface dataPedido {
    message: string;
    data: Pedido[];
}

export interface dataPedidoMostar {
    message: string;
    data: Pedido;
}

export interface dataPedidoEditar {
    message: string;
    data: Pedido;
}

export interface dataPedidoDelete {
    message: string;
    data: Pedido;
}

export interface dataPedidoFoto {
    message: string;
    data: Pedido;
}


