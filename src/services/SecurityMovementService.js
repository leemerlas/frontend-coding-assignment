import http from '../http-commons';

const getAllSecurityMovements = () => {
    return http.get(`/`);
}

const getSecurityMovement = (id) => {
    return http.get(`/${id}`)
}

const addSecurityMovement = (id) => {
    return http.post(`/`)
}

const updateSecurityMovement = (id) => {
    return http.put(`/${id}`)
}

const patchSecurityMovement = (id) => {
    return http.patch(`/${id}`)
}

const removeSecurityMovement = (id) => {
    return http.delete(`/${id}`)
}

const SecurityMovementService = {
    getAllSecurityMovements,
    getSecurityMovement,
    addSecurityMovement,
    updateSecurityMovement,
    patchSecurityMovement,
    removeSecurityMovement
}

export default SecurityMovementService;