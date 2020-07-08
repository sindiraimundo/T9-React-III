import React from 'react';


const formatarData = (data) => {//função auxiliadora, não é um componente, por isso inicia com letra minuscula
    return data.toLocaleDateString();// formatada data retorna : dd/mm/yyyy
    
}

export {
    formatarData,
};