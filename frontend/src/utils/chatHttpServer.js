import * as axios from 'axios';

class ChatHttpServer {

    login(userCredential) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/login', userCredential, { withCredentials: true });
                console.log(response.data)
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    checkUsernameAvailability(username) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/usernameAvailable', {
                    username: username
                }, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    register(userCredential) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/register', userCredential, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    updateVotes(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/updateVotes', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getUserInfo() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/getUserInfo', { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    userSessionCheck() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/isAuthenticated', { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getCategories() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/getCategories', { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getUserId() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/getUserId', { withCredentials: true });
                console.log(response.data)
                resolve(response.data.id);
            } catch (error) {
                reject(error);
            }
        });
    }

    addQuestion(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/addQuestion', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    addAnswer(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/addAnswer', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getQuestions(data) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(data)
                const response = await axios.post('http://localhost:4000/getQuestions/all/byTime', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getQuestionsByUser() {
        return new Promise(async (resolve, reject) => {
            try {
                //console.log(data)
                const response = await axios.post('http://localhost:4000/getQuestions/all/byUser/byTime', {}, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    updateSkills(data) {
        return new Promise(async (resolve, reject) => {
            try {
                //console.log(data)
                const response = await axios.post('http://localhost:4000/updateSkills', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAnswers(data) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(data)
                const response = await axios.post('http://localhost:4000/getAnswers', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getMessages(userId, toUserId) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/getMessages', {
                    userId: userId,
                    toUserId: toUserId
                }, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    logOut() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/logout', { withCredentials: true });
                console.log(response.data)
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

}

export default new ChatHttpServer();