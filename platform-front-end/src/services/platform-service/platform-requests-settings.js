export function CreatePlatformRequestsSettings() {

    const settings = {
        baseUrl : 'http://localhost:5280/api/Platform',
        headers: { 'Content-Type': 'application/json' }
    };

    return settings;
};

export function CreatePlatformGameRequestsSettings(id) {
  
    const settings = {
        baseUrl : `http://localhost:5280/api/Platform/${id}/Game`,
        headers: { 'Content-Type': 'application/json' }
    };

    return settings;
};

export function CreatePlatformTypeRequestsSettings() {
  
    const settings = {
        baseUrl : `http://localhost:5280/api/PlatformType`,
        headers: { 'Content-Type': 'application/json' }
    }

    return settings;
};

export function CreateGamesRequestSettings() {
    const settings = {
        baseUrl : `http://localhost:5280/api/Game`,
        headers: { 'Content-Type': 'application/json' }
    }

    return settings;
}