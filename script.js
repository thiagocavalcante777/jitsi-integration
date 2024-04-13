const domain = 'meet.jit.si';
const options = {
    APP_NAME: 'jitsi_integration',
    roomName: 'Consulta Online',
    parentNode: document.querySelector('#meet')
};
const api = new JitsiMeetExternalAPI(domain, options);
