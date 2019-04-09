

const filtro = ()=>{

    const select = document.getElementById('marca').value;

    if(select === 'Iphone'){
        $('.Motorola').hide();
        $('.HUAWEI ').hide();
        $('.Samgsum ').hide();
        $('.Xiaomi ').hide();
        $('.Iphone ').show();
    }

    else if(select === 'Motorola'){
        $('.Iphone').hide();
        $('.HUAWEI ').hide();
        $('.Samgsum ').hide();
        $('.Xiaomi ').hide();
        $('.Motorola ').show();
    }

    else if(select === 'Huawei'){
        $('.Iphone').hide();
        $('.Motorola ').hide();
        $('.Samgsum ').hide();
        $('.Xiaomi ').hide();
        $('.HUAWEI ').show();
    }

    else if(select === 'Xiaomi'){
        $('.Iphone').hide();
        $('.HUAWEI ').hide();
        $('.Samgsum ').hide();
        $('.Motorola ').hide();
        $('.Xiaomi ').show();
    }

    else if(select === 'Samgsum'){
        $('.Iphone').hide();
        $('.HUAWEI ').hide();
        $('.Xiaomi ').hide();
        $('.Motorola ').hide();
        $('.Samgsum ').show();
    }

    else if(select === ''){
        $('.Motorola').show();
        $('.HUAWEI ').show();
        $('.Samgsum ').show();
        $('.Xiaomi ').show();
        $('.Iphone ').show();
    }
    console.log(select);
};

const filtro2 = ()=>{

    const select2 = document.getElementById('Precio').value;
    console.log(select2);
    if(select2 === '10,000 Hacia arriba'){
        $('.Iphone').show();
        $('.Xiaomi ').show();
        $('.Samgsum ').hide();
        $('.Motorola ').show();
        $('.HUAWEI ').show();
    }
    else if(select2 === "10,000 para abajo"){
        $('.Iphone').hide();
        $('.Xiaomi').hide();
        $('.Samgsum').show();
        $('.Motorola').hide();
        $('.HUAWEI').show();
    }
    else if(select2 === "15,000 para arriba"){
        $('.Iphone').hide();
        $('.Iphone2').show();
        $('.Xiaomi').show();
        $('.Samgsum').hide();
        $('.Motorola').hide();
        $('.HUAWEI').hide();
    }
    else if(select2 === "20,000 hacia arriba"){
        $('.Iphone').hide();
        $('.Iphone2').show();
        $('.Xiaomi').hide();
        $('.Samgsum').hide();
        $('.Motorola').hide();
        $('.HUAWEI').hide();
    }
    else if(select2 === ""){
        $('.Iphone').show();
        $('.Iphone2').show();
        $('.Xiaomi').show();
        $('.Samgsum').show();
        $('.Motorola').show();
        $('.HUAWEI').show();
    }

};
