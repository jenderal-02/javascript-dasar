var jmlangkot = 10
var angkotberoprasi = 6

for( var noangkot =1; noangkot <= jmlangkot; noangkot++){

    if(noangkot <= 6 && noangkot !== 5 ) {
        console.log('Angkot No. ' + noangkot + ' Beroprasi dengan baik')
    }

    else if( noangkot === 8 || noangkot === 10 || noangkot === 5) {
        console.log('Angkot No. ' + noangkot + ' sedang Lembur')
    }
    
    else{
        console.log('Angkot No. ' + noangkot + ' sedang tidak beroprasi')
    }

}