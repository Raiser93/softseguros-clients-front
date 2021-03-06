import { types } from '../types/types';

// Varaible iniciales temporal
const initialState = {
    clients: [],
    clientActive: null
};

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {

        // Seleccionar cliente
        case types.clientSelected: {
            return {
                ...state,
                clientActive: action.payload
            }
        }

        // Eliminar cliente
        case types.clientDelete: {
            return {
                ...state,
                clients: state.clients.filter(
                    c => (c.id !== action.payload)
                ),
                clientActive: null
            }
        }

        // Dejar de tener seleccionado un cliente
        case types.clearClientSelected: {
            return {
                ...state,
                clientActive: null
            }
        }

        // Crear cliente
        case types.createClient: {
            return {
                ...state,
                clients: [
                    ...state.clients,
                    action.payload
                ]
            }
        }

        // Crear cliente
        case types.updateClient: {
            return {
                ...state,
                clients: state.clients.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }
        }
        // cargar clientes
        case types.clientLoaded: {
            return {
                ...state,
                clients: [...action.payload]
            }
        }
        default:
            return state;
    }
}