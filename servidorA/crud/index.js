const {initializeApp} = require("firebase/app");
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    getDocs } = require("firebase/firestore/lite");

    const firebaseConfig = {
        apiKey: "AIzaSyCZfylZ6VRE17gNmFybNFyinaDk9hkLxw8",
        authDomain: "learning-docker-6f896.firebaseapp.com",
        projectId: "learning-docker-6f896",
        storageBucket: "learning-docker-6f896.appspot.com",
        messagingSenderId: "315634099939",
        appId: "1:315634099939:web:4daa87e0aa1950c88f87d6"
    };    

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function pegar(nomeTabela) {
    const tableRef = collection(db, nomeTabela);
    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    });
    return lista;
}

module.exports = {
    salvar,
    pegar
}