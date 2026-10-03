
const abecedario = [
    { frase: 'A de Árbol', letra: '/ejercicio6/imagenes/letra/letter_a.webp', figura: '/ejercicio6/imagenes/figura/a_arbol.png' },
    { frase: 'B de Balón', letra: '/ejercicio6/imagenes/letra/letter_b.webp', figura: '/ejercicio6/imagenes/figura/b_balon.jpg' },
    { frase: 'C de Castillo', letra: '/ejercicio6/imagenes/letra/letter_c.webp', figura: '/ejercicio6/imagenes/figura/c_castillo.jpg' },
    { frase: 'D de Delfín', letra: '/ejercicio6/imagenes/letra/letter_d.webp', figura: '/ejercicio6/imagenes/figura/d_delfin.jpg' },
    { frase: 'E de Elefante', letra: '/ejercicio6/imagenes/letra/letter_e.webp', figura: '/ejercicio6/imagenes/figura/e_elefante.jpg' },
    { frase: 'F de Foca', letra: '/ejercicio6/imagenes/letra/letter_f.webp', figura: '/ejercicio6/imagenes/figura/f_foca.jpg' },
    { frase: 'G de Gato', letra: '/ejercicio6/imagenes/letra/letter_g.webp', figura: '/ejercicio6/imagenes/figura/g_gato.jpg' },
    { frase: 'H de Hormiga', letra: '/ejercicio6/imagenes/letra/letter_h.webp', figura: '/ejercicio6/imagenes/figura/h_hormiga.jpg' },
    { frase: 'I de Iglesia', letra: '/ejercicio6/imagenes/letra/letter_i.webp', figura: '/ejercicio6/imagenes/figura/i_iglesia.jpg' },
    { frase: 'J de Jirafa', letra: '/ejercicio6/imagenes/letra/letter_j.webp', figura: '/ejercicio6/imagenes/figura/j_jirafa.jpg' },
    { frase: 'K de Koala', letra: '/ejercicio6/imagenes/letra/letter_k.webp', figura: '/ejercicio6/imagenes/figura/k_koala.jpg' },
    { frase: 'L de León', letra: '/ejercicio6/imagenes/letra/letter_l.webp', figura: '/ejercicio6/imagenes/figura/l_leon.png' },
    { frase: 'M de Mariposa', letra: '/ejercicio6/imagenes/letra/letter_m.webp', figura: '/ejercicio6/imagenes/figura/m_mariposa.jpg' },
    { frase: 'N de Nutria', letra: '/ejercicio6/imagenes/letra/letter_n.webp', figura: '/ejercicio6/imagenes/figura/n_nutria.jpg' },
    { frase: 'O de Oso', letra: '/ejercicio6/imagenes/letra/letter_o.webp', figura: '/ejercicio6/imagenes/figura/o_oso.jpg' },
    { frase: 'P de Pato', letra: '/ejercicio6/imagenes/letra/letter_p.webp', figura: '/ejercicio6/imagenes/figura/p_pato.jpg' },
    { frase: 'Q de Queso', letra: '/ejercicio6/imagenes/letra/letter_q.webp', figura: '/ejercicio6/imagenes/figura/q_queso.jpg' },
    { frase: 'R de Ratón', letra: '/ejercicio6/imagenes/letra/letter_r.webp', figura: '/ejercicio6/imagenes/figura/r_raton.jpg' },
    { frase: 'S de Sapo', letra: '/ejercicio6/imagenes/letra/letter_s.webp', figura: '/ejercicio6/imagenes/figura/s_sapo.jpg' },
    { frase: 'T de Tigre', letra: '/ejercicio6/imagenes/letra/letter_t.webp', figura: '/ejercicio6/imagenes/figura/t_tigre.jpg' },
    { frase: 'U de Uvas', letra: '/ejercicio6/imagenes/letra/letter_u.webp', figura: '/ejercicio6/imagenes/figura/u_uvas.jpg' },
    { frase: 'V de Vaca', letra: '/ejercicio6/imagenes/letra/letter_v.webp', figura: '/ejercicio6/imagenes/figura/v_vaca.jpg' },
    { frase: 'W de Wapití', letra: '/ejercicio6/imagenes/letra/letter_w.webp', figura: '/ejercicio6/imagenes/figura/w_wapiti.jpg' },
    { frase: 'X de Xilófono', letra: '/ejercicio6/imagenes/letra/letter_x.webp', figura: '/ejercicio6/imagenes/figura/x_xilofono.jpg' },
    { frase: 'Y de Yoyo', letra: '/ejercicio6/imagenes/letra/letter_y.webp', figura: '/ejercicio6/imagenes/figura/y_yoyo.jpg' },
    { frase: 'Z de Zorro', letra: '/ejercicio6/imagenes/letra/letter_z.webp', figura: '/ejercicio6/imagenes/figura/z_zorro.jpg' }
];

let contador=0;

//selecciono los elementos
const siguiente = document.getElementById('next');
const fraseTxt = document.getElementById('frase');
const letraImg = document.querySelector('.card-letra img');
const caraImg = document.querySelector('.card-imagen img');

function actualizarCard() {
    fraseTxt.textContent = abecedario[contador].frase;
    letraImg.src = abecedario[contador].letra;
    caraImg.src = abecedario[contador].figura;
}



siguiente.addEventListener('click',() =>{
    contador++;
    if(contador>25){contador=0;}

    actualizarCard();


})