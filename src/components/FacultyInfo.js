import React from "react";
import Info from './Info'


export default ({faculty}) => <Info
    title="Wymiany"
    body={!faculty.exchangesEnabled
        ? 'zablokowane'
        : faculty.transferWithoutExchangeEnabled
            ? 'możliwe w miarę istniejących miejsc'
            : 'możliwe tylko w przypadku znalezienia zastępstwa'}/>

