/* 
    <============= Explore Localstorage and session storage with JSON ============>


    // for setting in localstorage : do strigify
    // for reading from localstorage : do parse
*/
const addToLocalStorage = () => {
    const IdInput = document.getElementById('storage-id');
    const id = IdInput.value;

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    IdInput.value = '';
    valueInput.value = '';

}