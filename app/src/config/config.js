function cleanEnvVar(value) {
    return value.replace(/^"(.*)"$/, "$1");
  }
  
  const config = {
    backendEndpoint: cleanEnvVar(import.meta.env.VITE_BACKEND_ENDPOINT||""),
    aiEndpoint: cleanEnvVar(import.meta.env.VITE_AI_ENDPOINT||""),
  };
  
  
  export default config;