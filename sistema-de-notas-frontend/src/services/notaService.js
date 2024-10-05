// src/services/notaService.js


import axios from 'axios';

const API_URL = 'http://localhost:8080/api/notas';

export const getNotas = () => {
    return axios.get(API_URL);
};

export const createNota = (nota) => {
    return axios.post(API_URL, nota);
};

export const updateNota = (id, nota) => {
    return axios.put(`${API_URL}/${id}`, nota);
};

export const deleteNota = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};