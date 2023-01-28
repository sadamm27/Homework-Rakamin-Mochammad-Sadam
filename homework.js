let angka = [];

for (let i = 0; i < 100; i++) {
  let angkaAcak = Math.floor(Math.random() * 50) + 1;
  angka.push(angkaAcak);
}

console.log(angka);

let angkaGenap = []
let angkaGanjil = []
for(let i = 0; i < angka.length; i++){
    if (angka[i] % 2 == 0) {
        angkaGenap.push(angka[i]);
    }else{
        angkaGanjil.push(angka[i]);
    }
}
    console.log(angkaGenap);
    console.log(angkaGanjil);

let angkaMinimalGanjil = angkaGanjil[0];
for (let i = 1; i < angkaGanjil.length; ++i){
    if (angkaGanjil[i] < angkaMinimalGanjil) {
        angkaMinimalGanjil = angkaGanjil[i];
    }
} 
console.log(angkaMinimalGanjil);

let angkaMinimalGenap = angkaGenap[0];
for (let i = 1; i < angkaGenap.length; ++i){
    if (angkaGenap[i] < angkaMinimalGenap) {
        angkaMinimalGenap = angkaGenap[i];
    }
} 
console.log(angkaMinimalGenap);

let angkaMaximalGanjil = angkaGanjil[0];
for (let i = 1; i < angkaGanjil.length; ++i){
    if (angkaGanjil[i] > angkaMaximalGanjil) {
        angkaMaximalGanjil = angkaGanjil[i];
    }
} 
console.log(angkaMaximalGanjil);

let angkaMaximalGenap = angkaGenap[0];
for (let i = 1; i < angkaGenap.length; ++i){
    if (angkaGenap[i] > angkaMaximalGenap) {
        angkaMaximalGenap = angkaGenap[i];
    }
} 
console.log(angkaMaximalGenap);

let angkaTotalGenap = 0;
for (let i = 0; i < angkaGenap.length; i++){
    angkaTotalGenap += angkaGenap[i];
}
console.log(angkaTotalGenap);

let angkaTotalGanjil = 0;
for (let i = 0; i < angkaGanjil.length; i++){
    angkaTotalGanjil += angkaGanjil[i];
}
console.log(angkaTotalGanjil);

let angkaRatarataGenap = angkaGenap[0];
for (let i = 1; i < angkaGenap.length; ++i){
    if (angkaGenap[i] = angkaRatarataGenap) {
        angkaRatarataGenap = angkaGenap[i];
    }
} 
console.log(angkaRatarataGenap);

let angkaRatarataGanjil = angkaGanjil[0];
for (let i = 1; i < angkaGanjil.length; ++i){
    if (angkaGanjil[i] = angkaRatarataGanjil) {
        angkaRatarataGanjil = angkaGanjil[i];
    }
} 
console.log(angkaRatarataGanjil);

let perbandinganAngkaMinimal = [];
function perbandinganAngkaMin(angkaMinimalGanjil, angkaMinimalGenap) {
    perbandinganAngkaMinimal.push(angkaMinimalGanjil);
    perbandinganAngkaMinimal.push(angkaMinimalGenap);
    
    if (angkaMinimalGanjil > angkaMinimalGenap) {
        console.log(`Angka Minimal Ganjil Lebih Besar}`);
    } else if (angkaMinimalGenap > angkaMinimalGanjil) {
        console.log(`Angka Minimal Genap Lebih Besar`);
    } else {
        console.log(`Angka Minimal Setara`);
    }
    return perbandinganAngkaMinimal;
}

console.log(perbandinganAngkaMin(angkaMinimalGanjil, angkaMinimalGenap)); 

let perbandinganAngkaMaximal = [];
function perbandinganAngkaMax(angkaMaximalGanjil, angkaMaximalGenap) {
    perbandinganAngkaMaximal.push(angkaMaximalGanjil);
    perbandinganAngkaMaximal.push(angkaMaximalGenap);
    
    if (angkaMaximalGanjil > angkaMaximalGenap) {
        console.log(`Angka Maximal Ganjil Lebih Besar}`);
    } else if (angkaMaximalGenap > angkaMaximalGanjil) {
        console.log(`Angka Maximal Genap Lebih Besar`);
    } else {
        console.log(`Angka Maximal Setara`);
    }
    return perbandinganAngkaMaximal;
}

console.log(perbandinganAngkaMax(angkaMaximalGanjil, angkaMaximalGenap))

let perbandinganAngkaTotal = [];
function perbandinganAngkaTot(angkaTotalGanjil, angkaTotalGenap) {
    perbandinganAngkaTotal.push(angkaTotalGanjil);
    perbandinganAngkaTotal.push(angkaTotalGenap);
    
    if (angkaTotalGanjil > angkaTotalGenap) {
        console.log(`Angka Total Ganjil Lebih Besar}`);
    } else if (angkaTotalGenap > angkaTotalGanjil) {
        console.log(`Angka Total Genap Lebih Besar`);
    } else {
        console.log(`Angka Total Setara`);
    }
    return perbandinganAngkaTotal;
}

console.log(perbandinganAngkaTot(angkaTotalGanjil, angkaTotalGenap))

let perbandinganAngkaRatarata = [];
function perbandinganAngkaRata(angkaRatarataGanjil, angkaRatarataGenap) {
    perbandinganAngkaRatarata.push(angkaRatarataGanjil);
    perbandinganAngkaRatarata.push(angkaRatarataGenap);
    
    if (angkaRatarataGanjil > angkaRatarataGenap) {
        console.log(`Angka Rata Rata Ganjil Lebih Besar}`);
    } else if (angkaRatarataGenap > angkaRatarataGanjil) {
        console.log(`Angka Rata Rata Genap Lebih Besar`);
    } else {
        console.log(`Angka Rata Rata Setara`);
    }
    return perbandinganAngkaRatarata;
}

console.log(perbandinganAngkaRata(angkaRatarataGanjil, angkaRatarataGenap))