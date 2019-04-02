

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
