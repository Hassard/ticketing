import axios from 'axios';

const BuildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server

    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local', 
      //baseURL: 'http://www.ticketing-app-rh.xyz/', 
      headers: req.headers
    });
  } else {
    // we must be on the browser
    return axios.create({
      baseURL: '/'
    });
  }
};

export default BuildClient;