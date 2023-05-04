@font-face {
    font-family: visby regular;
    font-style: normal;
    font-weight: 400;
    src: local('Visby Regular'),url(../fonts/VisbyRegular.woff) format('woff');
    font-display: swap
}

@font-face {
    font-family: visby bold;
    font-style: normal;
    font-weight: 400;
    src: local('Visby Bold'),url(../fonts/VisbyBold.woff) format('woff');
    font-display: swap
}

@font-face {
    font-family: visby extrabold;
    font-style: normal;
    font-weight: 400;
    src: local('Visby Extrabold'),url(../fonts/VisbyExtrabold.woff) format('woff');
    font-display: swap
}

@font-face {
    font-family: visby medium;
    font-style: normal;
    font-weight: 400;
    src: local('Visby Medium'),url(../fonts/VisbyMedium.woff) format('woff');
    font-display: swap
}

@font-face {
    font-family: visby semibold;
    font-style: normal;
    font-weight: 400;
    src: local('Visby Semibold'),url(../fonts/VisbySemibold.woff) format('woff');
    font-display: swap
}

* {
    box-sizing: border-box
}

html,body {
    margin: 0;
    padding: 0
}

body {
    font-family: visby medium,sans-serif;
    font-size: 16px;
    color: #6a6a6a
}

a {
    text-decoration: none
}

a:hover {
    text-decoration: none
}

.mob {
    display: none
}

textarea,input:focus {
    outline: none
}

img {
    max-width: 100%;
    height: auto
}

b,h1,h2,h3,h4 {
    font-weight: 400
}

strong {
    font-weight: 700
}

h2 {
    font-size: 2.5em
}

figure {
    margin: 0
}

.padding {
    padding: 60px 0
}

.pad-bottom {
    padding-bottom: 60px
}

.img100 img,img.img100 {
    width: 100%;
    height: auto
}

.flex {
    display: flex
}

.text-center {
    text-align: center
}

.align-right {
    float: right;
    margin: 0 0 20px 20px
}

.align-left {
    float: left;
    margin: 0 20px 20px 0
}

.hide-desktop,a.open-menu.hide-desktop {
    display: none
}

header {
    padding: 15px 0 0
}

header .row {
    align-items: center
}

header .redes p {
    margin: 0 0 7px
}

.busca input {
    border: 1px solid #6a6a6a;
    padding: 5px 20px 5px 10px;
    border-left: none;
    -webkit-border-top-right-radius: 30px;
    -webkit-border-bottom-right-radius: 30px;
    -moz-border-radius-topright: 30px;
    -moz-border-radius-bottomright: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px
}

.busca {
    text-align: right
}

.busca button {
    border: 1px solid #6a6a6a;
    padding: 5px 0 5px 7px;
    border-right: none;
    background-color: transparent;
    color: #6a6a6a;
    -webkit-border-top-left-radius: 30px;
    -webkit-border-bottom-left-radius: 30px;
    -moz-border-radius-topleft: 30px;
    -moz-border-radius-bottomleft: 30px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px
}

.busca label {
    width: 100%
}

header nav {
    background-color: #e00;
    margin-top: 15px
}

header .menu {
}

header .menu ul {
    list-style: none;
    display: flex;
    justify-content: center
}

header .menu ul li {
    padding: 0 13px;
    border-left: 1px solid #fff
}

header .menu ul li:nth-child(1) {
    border-left: none
}

header .menu ul li a {
    color: #fff;
    text-transform: uppercase;
    transition: .4s
}

header .menu ul li a:hover {
    color: #f0d40f
}

header .redes svg {
    max-width: 30px;
    max-height: 22px;
    margin: 0 8px
}

.home .highlinght {
    justify-content: center
}

.storys {
    display: none
}

.storys .slick-prev {
    left: -25px
}

.storys .slick-next {
    right: -25px
}

.storys .slick-prev:before,.storys .slick-next:before {
    color: #e00
}

.imghover figure {
    position: relative
}

.imghover figure .sombra {
    background: #000;
    height: 50%;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)
}

.imghover figure img {
    border-radius: 20px
}

.imghover figure .info {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 20px
}

.imghover figure .info h2 {
    margin: 0 0 13px;
    color: #fff;
    font-family: visby bold
}

.imghover figure .info h2 a {
    text-transform: initial;
    border-bottom: none
}

.imghover figure .info a {
    color: #fff;
    display: inline-block;
    border-bottom: 1px solid #fff;
    transition: .4s;
    text-transform: uppercase;
    font-family: visby bold
}

.imghover figure .info a:hover {
    border-color: transparent
}

.imghover figure .info .flex {
    align-items: center;
    justify-content: space-between
}

.destaque .max .info {
    padding: 40px
}

.destaque .max h2 {
    font-size: 2em;
    text-shadow: 1px 1px 4px rgba(0,0,0,.75)
}

.destaque .min h2 {
    font-size: 1.15em;
    line-height: 1.1em;
    text-shadow: 1px 1px 4px rgba(0,0,0,.6)
}

.destaque .min figure .sombra {
    height: 80%
}

.destaque .min .space {
    height: 15px
}

.destaque.padding {
    padding: 20px 0 60px
}

.home-noticias {
    margin-bottom: 60px
}

.home-noticias .titulo {
    text-transform: uppercase;
    text-align: center;
    padding: 7px 13px;
    color: #fff;
    font-family: visby bold;
    border-radius: 7px;
    margin-bottom: 26px;
    font-size: 1.3em;
    background: #e63f53;
    background: linear-gradient(90deg,rgba(230,63,83,1) 0%,rgba(198,24,31,1) 100%)
}

.home-noticias .main {
    border-radius: 13px;
    overflow: hidden;
    margin-bottom: 26px;
    border: 1px solid #c1c1c1
}

.home-noticias .main .text {
    padding: 30px
}

.home-noticias .main .title {
    min-height: 120px
}

.home-noticias a {
    color: #6a6a6a;
    font-family: visby bold;
    font-size: .7em
}

.home-noticias .title a {
    color: #e33c4d;
    font-family: visby extrabold;
    font-size: 1.1em;
    transition: .4s
}

.home-noticias .not {
    margin-bottom: 30px;
    min-height: 90px;
    border-top: 1px solid #e6e6e6;
    padding-top: 30px
}

.home-noticias .not .row {
    align-items: center
}

.home-noticias .not img {
    border-radius: 13px
}

.home-noticias .main a {
    font-size: 1.2em
}

.home-noticias .main .title a {
    font-size: 1.3em
}

.home-noticias .amarelo .titulo {
    background-color: #f1d30c;
    background: #f0e311;
    background: linear-gradient(90deg,rgba(240,227,17,1) 0%,rgba(242,177,0,1) 100%)
}

.home-noticias .amarelo .title a,.amarelo {
    color: #f1d30c;
    transition: .4s
}

.home-noticias .verde .titulo {
    background-color: #72b42c;
    background: #75b52a;
    background: linear-gradient(90deg,rgba(117,181,42,1) 0%,rgba(20,153,57,1) 100%)
}

.home-noticias .verde .title a,.verde {
    color: #72b42c;
    transition: .4s
}

.home-noticias .title a:hover {
    color: #6a6a6a
}

.home-noticias .but {
    text-align: center;
    padding: 5px 13px;
    color: #fff;
    font-family: visby bold;
    border-radius: 7px;
    margin-bottom: 26px;
    font-size: 1em;
    display: block;
    transition: .4s;
    background: #e63f53;
    background: linear-gradient(90deg,rgba(230,63,83,1) 0%,rgba(198,24,31,1) 100%)
}

.home-noticias .amarelo .but {
    background-color: #f1d30c;
    background: #f0e311;
    background: linear-gradient(90deg,rgba(240,227,17,1) 0%,rgba(242,177,0,1) 100%)
}

.home-noticias .verde .but {
    background-color: #72b42c;
    background: #75b52a;
    background: linear-gradient(90deg,rgba(117,181,42,1) 0%,rgba(20,153,57,1) 100%)
}

.home-noticias .but:hover {
    background: #777
}

.highlinght.imghover figure .info {
    bottom: 60px;
    text-align: center
}

.highlinght.imghover figure .info h2 {
    margin-bottom: 26px;
    font-family: visby extrabold
}

.highlinght.imghover figure .info a {
    display: inline-block;
    padding: 7px 26px;
    text-transform: uppercase;
    border-radius: 20px;
    border: 2px solid #fff
}

.highlinght.imghover figure .sombra,.highlinght.imghover figure img {
    border-radius: 0
}

.botao {
    text-align: center
}

.botao a {
    display: inline-block;
    text-transform: uppercase;
    font-family: visby extrabold;
    background-color: #e33c4d;
    color: #fff;
    padding: 7px 26px;
    border-radius: 8px;
    margin-top: 26px;
    font-size: 1.2em;
    transition: .4s
}

.highlinght.imghover figure .info a:hover,.botao a:hover {
    opacity: .7
}

.home-videos {
    background-color: #e42227;
    color: #fff
}

.home-videos .title {
    font-family: visby extrabold;
    text-align: right;
    font-size: 3em
}

.home-videos .but {
    display: inline-block;
    background-color: #fff;
    color: #e42227;
    padding: 10px 20px;
    border-radius: 6px;
    font-family: visby bold;
    transition: .4s
}

.home-videos .but:hover {
    opacity: .7
}

.home-videos .slider-vid .item {
    padding: 0 7px
}

.home-videos .slider-vid {
    margin-top: 36px
}

.home-videos .slider-vid a {
    color: #fff;
    display: block;
    margin-bottom: 5px;
    text-align: center
}

.home-videos .slider-vid img {
    border-radius: 6px
}

.home-videos .slider-vid .slick-prev {
    left: -25px
}

.home-videos .slider-vid .slick-next {
    right: -25px
}

.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
}

.grid .item {
    width: 31%
}

.slick-prev,.slick-next {
    z-index: 2
}

.busca.buscag {
    text-align: center;
    margin-bottom: 26px
}

.busca.buscag input {
    width: 97%;
    padding: 8px 40px 8px 15px;
    border: none;
    background-color: #f5f5f5
}

.busca.buscag button {
    padding: 8px 0 8px 10px;
    border: none;
    background-color: #f5f5f5
}

.noticias .item {
    border-radius: 13px;
    overflow: hidden;
    margin-bottom: 26px;
    border: 1px solid #c1c1c1
}

.noticias .item .text {
    padding: 15px 26px
}

.noticias a {
    color: #6a6a6a;
    font-family: visby bold;
    font-size: .7em
}

.noticias .item .title a {
    color: #e33c4d;
    font-family: visby extrabold;
    font-size: 1.4em;
    transition: .4s
}

.noticias .item {
    margin-bottom: 40px
}

.noticias .item img {
    border-radius: 13px
}

.noticias .botao a {
    padding: 10px 30px;
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 20px
}

.noticias .busca.buscag {
    margin-top: -26px
}

h1.box {
    padding: 40px 0;
    text-align: center;
    font-size: 3.2em;
    color: #e42227;
    font-family: visby extrabold;
    text-transform: uppercase
}

article {
    font-size: 1.2em;
    border-bottom: 1px solid #787777;
    margin-bottom: 30px;
    padding-bottom: 30px
}

article h1 {
    padding: 40px 0 0;
    font-size: 3.2em;
    color: #000;
    font-family: visby extrabold;
    line-height: 1.05em
}

article p {
    line-height: 1.5em;
    padding-bottom: 26px;
    color: #787777
}

article img {
    border-radius: 13px
}

article .img100 img {
    border-radius: 13px;
    margin: 13px 26px 26px;
    width: calc(100% - 52px)!important
}

b,strong {
    font-family: visby extrabold
}

article .dados {
    padding: 0 0 20px;
    display: flex;
    justify-content: space-between;
    font-size: .7em;
    border-bottom: 1px solid #787777;
    margin-bottom: 13px;
    align-items: center
}

.relacionados {
    padding: 0 0 26px 1%;
    text-align: center;
    font-size: 2.4em;
    color: #e42227;
    font-family: visby extrabold
}

article .share {
    display: flex;
    align-items: center
}

article .share .sharethis-inline-share-buttons {
    margin-left: 13px
}

.noticias article a {
    color: #e42227;
    font-size: 1em
}

.manifesto {
    background-color: #cd1a19;
    color: #fff
}

.manifesto h1,.manifesto h2 {
    font-size: 2.5em;
    font-family: visby extrabold
}

.manifesto .separador {
    margin: 40px 0 0;
    height: 1px;
    background-color: #fff
}

.manifesto .lista .grid {
    margin-bottom: 40px
}

.manifesto .lista .grid .item {
    width: 24%;
    padding: 6px 0
}

.manifesto .lista .grid .item .nome {
    font-family: visby extrabold
}

.manifesto .pagination {
    padding: 20px 0
}

.manifesto form {
    background-color: #b10d0d;
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 90px
}

.manifesto form label {
    display: block;
    margin-bottom: 13px
}

.manifesto form input {
    border: 2px solid #fff;
    background-color: transparent;
    border-radius: 20px;
    padding: 7px 13px;
    width: 100%
}

.manifesto form button {
    background-color: #1d2a60;
    color: #fff;
    border-radius: 20px;
    padding: 7px 26px;
    border: none;
    text-transform: uppercase;
    transition: .4s
}

.manifesto form button:hover {
    opacity: .7
}

.manifesto form select#estado {
    width: 100%;
    padding: 9px;
    border-radius: 20px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff
}

.manifesto .compartilhe {
    padding: 0 0 60px;
    color: #fff
}

.manifesto .compartilhe p {
    margin: 26px 0
}

.manifesto .lista .grid.famosos .item {
    width: 31%;
    align-items: center
}

.manifesto .lista .grid.famosos .item img {
    border-radius: 30px;
    max-width: 43px;
    height: auto;
    margin-right: 13px
}

.biografia .frase1 {
    font-size: 1.4em;
    line-height: 1.4em;
    margin: 60px 0 26px;
    align-items: center
}

.biografia .frase3 {
    font-size: 1.3em;
    line-height: 1.4em;
    margin: 0 0 26px;
    align-items: center
}

.img-topo {
    position: relative;
    text-align: center
}

.img-topo .sombra {
    background: #000;
    height: 65%;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)
}

.img-topo .info {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 20px
}

.img-topo h1 {
    margin: 0 0 13px;
    color: #fff;
    font-family: visby extrabold;
    font-size: 8.2em
}

.img-topo h2 {
    margin: 0 0 13px;
    color: #fff;
    font-family: visby bold;
    background-color: #344e9b;
    font-size: 1.83em;
    padding: 7px 13px
}

.img-topo .seta {
    margin: 26px
}

.text-article {
    font-size: 1.1em;
    padding: 40px 0
}

.text-article p {
    line-height: 1.5em;
    padding-bottom: 13px
}

.legado .check {
    background: url(../images/legado.jpg);
    background-size: cover;
    padding: 60px 0
}

.legado .check .box {
    background-color: #249734;
    border-radius: 20px;
    padding: 26px;
    color: #fff
}

.legado .check .box .title {
    font-family: visby extrabold;
    font-size: 2.2em
}

.legado .check .box .checks {
    background: url(../images/check.png) no-repeat;
    height: 56px;
    display: flex;
    align-items: center;
    padding-left: 66px;
    font-size: 1.2em;
    margin: 13px 0
}

.legado .aspas {
    font-size: 2em;
    line-height: 1.3em;
    position: relative;
    padding-left: 13px;
    margin-bottom: 40px
}

.legado .aspas span {
    padding: 7px;
    background-color: #66b12e;
    color: #fff;
    font-family: visby extrabold
}

.legado .aspas .gueri {
    position: absolute;
    margin: -5px 0 0 -24px;
    color: #fff;
    font-size: 4em
}

.legado .amarelo {
    background-color: #fd0;
    color: #787777;
    padding: 26px 0;
    margin-top: -5px
}

.compartilhe {
    padding: 60px 0;
    text-align: center;
    font-size: 2.4em;
    color: #e00
}

.videoWrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0
}

.videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.downloads .img-topo h1 {
    font-size: 4em;
    line-height: 1.2em
}

.downloads .busca {
    margin: 30px auto
}

.downloads .categorias {
    display: flex;
    justify-content: center;
    margin-bottom: 26px
}

.downloads .categorias a {
    display: inline-block;
    padding: 7px 0;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 3px;
    min-width: 90px;
    font-size: 16px
}

.downloads .categorias a:hover {
    opacity: .7
}

.downloads .item {
    width: 19%
}

.downloads .item img {
    border-radius: 20px
}

.downloads .item .text {
    display: flex;
    margin: 5px 0 26px
}

.downloads .item .text .baixar a {
    display: inline-block;
    background-color: #cc2029;
    color: #fff;
    padding: 3px 16px;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: .8em;
    margin-left: 4px
}

.downloads .item .text .baixar a i {
    font-size: .8em
}

.downloads .item .text .share a {
    display: inline-block;
    width: 21px;
    height: 21px;
    overflow: hidden;
    text-indent: -1000px;
    background: url(../images/ico-share-zap.png) no-repeat
}

.downloads .item .text .share a:nth-child(2) {
    background: url(../images/ico-share-face.png) no-repeat
}

.downloads .item .text .share a:nth-child(3) {
    background: url(../images/ico-share-twitter.png) no-repeat
}

.downloads .item .text a:hover {
    opacity: .7
}

.quiz .marca {
    padding: 80px 0 50px
}

.quiz .item {
    background-color: #cc2029;
    padding: 23px;
    border-radius: 26px;
    color: #fff;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 0 5px 6px 0 rgba(0,0,0,.6);
    box-shadow: 0 5px 6px 0 rgba(0,0,0,.6)
}

.quiz .item:nth-child(2n) {
    background-color: #53a931
}

.quiz .item:nth-child(3n) {
    background-color: #314492
}

.quiz .item:nth-child(4n) {
    background-color: #f9c401
}

.quiz .item h2 {
    font-family: visby extrabold;
    font-size: 1.8em;
    margin: 0 0 13px;
    line-height: 1.1em
}

.quiz a {
    color: #fff
}

.quiz .item .image {
    max-width: 45%;
    margin-right: 26px
}

.quiz .item.grande .image {
    max-width: 100%;
    margin-right: 0
}

.quiz .item.grande {
    display: block;
    padding: 40px;
    font-size: 1.2em
}

.quiz .item.grande h2 {
    font-size: 2.1em;
    margin: 26px 0 13px
}

.paginate {
    width: 100%;
    text-align: center
}

.wp-paginate .current {
    background: #e00!important;
    border: none!important;
    border-radius: 7px
}

.wp-paginate a {
    background: 0 0!important;
    border: none!important
}

.legado .wp-block-image {
    margin: 0
}

.legado .wp-block-columns,.manifesto .wp-block-columns {
    margin-bottom: 0
}

.checkbox input {
    width: auto!important
}

.wp-block-columns.lista {
    line-height: 1.5em
}

.bt {
    display: inline-block;
    background-color: #1d2a60;
    color: #fff;
    border-radius: 5px;
    padding: 7px 10px;
    border: none;
    text-transform: uppercase;
    transition: .4s
}

.home-noticias .fa-facebook {
    color: #4267b2
}

.home-noticias .fa-twitter {
    color: #55acee
}

.home-noticias .fa-whatsapp {
    color: #25d366
}

.home-noticias .fa-telegram {
    color: #08c
}

footer {
    padding: 70px 0 0;
    max-width: 100%;
    overflow: hidden;
    background-color: #efefef
}

.home footer {
    background-color: #fff
}

footer .flex {
    justify-content: space-between;
    align-items: center
}

footer .menu .title {
    font-size: 2em;
    text-decoration: underline;
    text-transform: uppercase;
    font-family: visby extrabold
}

footer .menu ul {
    list-style: none;
    margin: 0;
    padding: 20px 0
}

footer .menu ul li {
    display: inline-block;
    width: 49%;
    margin-bottom: 7px
}

footer .menu ul li a {
    color: #6a6a6a;
    transition: .4s;
    font-family: visby semibold;
    font-size: 1.2em
}

footer .menu ul li a:hover {
    color: #e42227
}

footer .space {
    height: 60px
}

.carrossel-story {
    padding-top: 40px
}

.carrossel-story img {
    width: 90px;
    height: 90px;
    border-radius: 97px;
    display: inline-block
}

.carrossel-story .item {
    text-align: center;
    cursor: pointer;
    padding: 0 5px
}

.carrossel-story .item:hover {
    opacity: .8
}

.modal-slider .item {
    color: #fff;
    position: relative
}

.modal-slider .item .info {
    font-family: visby extrabold;
    font-size: 1.7em;
    padding: 20px;
    position: absolute;
    bottom: 30px;
    color: #fff
}

.modal-slider .slick-next {
    right: -35px
}

.modal-slider .slick-prev {
    left: -35px
}

.modal-slider {
    background: rgba(0,0,0,.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;
    padding-top: 7vh;
    z-index: 2
}

.modal-slider .conteudo {
    width: calc(85vh * (56.25/100));
    text-align: center;
    margin: auto
}

.modal-slider img {
    max-height: 85vh;
    width: auto
}

.modal-slider .fechar {
    cursor: pointer;
    font-size: 1.7em;
    position: absolute;
    top: 13px;
    right: 13px;
    color: #fff
}

.lulaoke {
}

.lulaoke .img-topo h2 {
    background-color: transparent
}

.lulaoke p {
    font-size: 1.2em
}

.lulaoke .form {
    background-color: #2358ff;
    padding: 30px 0;
    color: #fff
}

.lulaoke .form .row {
    align-items: center
}

.lulaoke .form h3 {
    font-family: visby extrabold;
    font-size: 2em;
    color: #f4e607;
    line-height: 1.15em
}

.lulaoke .form form {
    background-color: #1840bd;
    padding: 20px;
    border-radius: 13px
}

.lulaoke form label {
    display: block;
    margin-bottom: 13px
}

.lulaoke form input {
    border: 2px solid #fff;
    background-color: transparent;
    border-radius: 20px;
    padding: 7px 13px;
    width: 100%
}

.lulaoke form button {
    background-color: #1d2a60;
    color: #fff;
    border-radius: 20px;
    padding: 7px 26px;
    border: none;
    text-transform: uppercase;
    transition: .4s
}

.lulaoke form button:hover {
    opacity: .7
}

.lulaoke form select {
    width: 100%;
    max-width: 100%;
    padding: 9px;
    border-radius: 20px;
    background-color: transparent;
    border: 2px solid #fff
}

.lulaoke form select {
    color: #fff
}

.lulaoke form select option:not(:first-of-type) {
    color: #666
}

.lulaoke .grid {
    margin: 26px 0
}

.lulaoke .grid .item {
    border-radius: 13px;
    overflow: hidden;
    margin: 26px 0;
    background-color: #2358ff;
    color: #fff
}

.lulaoke .grid .item .nome {
    padding: 13px 7px
}

.lulaoke .grid .item .img {
    padding: 7px;
    text-align: center
}

.lulaoke .grid .item .nome .flex {
    align-items: center;
    justify-content: center
}

.lulaoke .grid .item .nome .flex span {
    display: inline-block;
    margin-right: 13px
}

.lulaoke form input::placeholder {
    color: #fff;
    opacity: 1
}

.lulaoke form input::-ms-input-placeholder {
    color: #fff
}

.share-bt {
    font-size: .85em;
    color: #e00;
    padding-top: 9px;
    font-family: visby bold
}

.share-bt a {
    margin: 0 4px;
    color: #e00;
    font-size: 1.3em
}

.lulaoke .share-bt,.lulaoke .share-bt a {
    color: #fff
}

.lulaoke .share-bt {
    margin-right: 13px
}

.destaque .share-bt {
    color: #fff;
    margin-bottom: 7px
}

.destaque .share-bt a {
    border-bottom: none!important
}

.destaque .fa-facebook {
    color: #4267b2
}

.destaque .fa-twitter {
    color: #55acee
}

.destaque .fa-whatsapp {
    color: #25d366
}

.destaque .fa-telegram {
    color: #08c
}

.st-btn {
    display: inline-block!important
}

@media screen and (max-width: 1300px) {
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 990px) {
}

@media screen and (max-width: 767px) {
    .desk {
        display:none
    }

    .hide-desktop,a.open-menu.hide-desktop,.mob {
        display: block
    }

    a.open-menu.hide-desktop {
        color: #e42227;
        margin-right: 20px;
        font-size: 1.5em
    }

    h2 {
        font-size: 1.4em
    }

    header {
        background-color: #fff;
        -webkit-box-shadow: 0 0 7px 0 rgba(0,0,0,.7);
        box-shadow: 0 0 7px 0 rgba(0,0,0,.7)
    }

    header .acesse,header .menu {
        display: none
    }

    header {
        padding: 10px 0 0
    }

    header .logo {
        max-width: 150px
    }

    header .row {
        justify-content: space-between
    }

    .full-menu .busca {
        text-align: left;
        margin: 26px 0 0 40px
    }

    .full-menu .busca button {
        background-color: #fff
    }

    .destaque.padding {
        padding: 26px 0 60px
    }

    .destaque .max {
        margin-bottom: 15px
    }

    .destaque .max h2,.destaque .min h2 {
        font-size: 1.25em;
        line-height: 1.15em
    }

    .destaque .max .info {
        padding: 20px
    }

    .home-noticias .titulo {
        font-size: 1.2em
    }

    .home-noticias .col-12.col-md-4 {
        margin-bottom: 70px
    }

    .highlinght.flex {
        flex-direction: column
    }

    .home-videos .title {
        text-align: left;
        font-size: 2em;
        line-height: 1.2em
    }

    .downloads .item {
        width: 49%
    }

    .downloads .categorias {
        justify-content: center;
        flex-wrap: wrap
    }

    .downloads .img-topo h1 {
        font-size: 1.4em
    }

    .img-topo {
        width: 100%;
        overflow: hidden
    }

    .img-topo .seta img {
        margin-left: 0;
        width: 26px
    }

    .img-topo img {
        max-width: 200%;
        margin-left: -50%
    }

    .img-topo .marca img {
        max-width: initial;
        margin-left: auto;
        width: 260px
    }

    .img-topo h2 {
        font-size: 1em
    }

    .img-topo h1 {
        font-size: 1.8em
    }

    .img-topo .info {
        padding: 20px 10px
    }

    .legado .check .box .checks {
        padding-left: 42px;
        font-size: 1em;
        margin: 9px 0;
        background-size: 33px;
        background-position-y: 10px
    }

    .legado .check .box .title {
        font-family: visby extrabold;
        font-size: 1.7em;
        line-height: 1.1em
    }

    .legado .aspas {
        font-size: 1.6em
    }

    .manifesto .lista .grid .item {
        width: 48%
    }

    .manifesto .lista .grid.famosos .item {
        width: 48%
    }

    .text-article {
        font-size: 1em;
        padding: 40px 15px
    }

    .busca.buscag input {
        width: 90%
    }

    .grid .item {
        width: 100%
    }

    article h1 {
        padding: 0;
        font-size: 1.7em
    }

    article {
        font-size: 1em
    }

    .relacionados {
        padding: 0 0 26px 15px
    }

    h1.box {
        padding: 0 0 13px
    }

    .quiz .item.grande {
        padding: 20px 13px;
        font-size: 1em
    }

    .quiz .item.grande h2 {
        font-size: 1.6em;
        margin: 16px 0 13px
    }

    .quiz .item img {
        border-radius: 13px
    }

    .quiz .item {
        flex-direction: column;
        padding: 20px 13px
    }

    .quiz .item h2 {
        font-size: 1.6em
    }

    .quiz .item .image {
        max-width: 100%;
        margin-right: 0
    }

    footer .menu ul li a {
        font-size: 1em;
        padding: 7px 0;
        display: inline-block
    }
}

@media screen and (max-width: 520px) {
}

@media screen and (max-width: 460px) {
}

body.overflow {
    overflow: hidden
}

.full-menu {
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 9999999999;
    transition: .5s;
    background-color: #5b42e1;
    color: #fff
}

.full-menu.show-menu {
    right: 0
}

.full-menu .overlay-menu {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255,255,255,.5);
    z-index: 10;
    cursor: pointer
}

.full-menu .bar-menu .logo {
    float: left;
    margin-bottom: 10px;
    margin-top: 10px
}

.full-menu .bar-menu .logo img {
    max-width: 100px
}

.full-menu .bar-menu .close-menu {
    position: absolute;
    right: 25px;
    top: 25px;
    line-height: 33px;
    height: 30px;
    width: 30px;
    background: #fff;
    text-align: center;
    border-radius: 5px;
    color: #e00
}

.full-menu .bar-menu .close-menu:hover {
    opacity: .8
}

.full-menu .bar-menu {
    width: 100%;
    max-width: 380px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    background: #e00;
    z-index: 50;
    padding: 20px 25px;
    overflow-x: hidden;
    overflow-y: scroll
}

.full-menu .bar-menu nav {
    display: table;
    width: 100%;
    margin-top: 20px;
    float: left
}

.full-menu .bar-menu ul {
    display: block;
    width: 100%;
    margin-bottom: 10px
}

.full-menu .bar-menu ul li {
    position: relative;
    border-bottom: 1px solid rgba(255,255,255,.06)
}

.full-menu .bar-menu ul li,.full-menu .bar-menu ul li a {
    display: table;
    width: 100%
}

.full-menu .bar-menu ul li a {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    padding: 20px 0;
    position: relative;
    font-weight: 400;
    display: flex;
    align-items: center
}

.full-menu .bar-menu ul li ul {
    display: none;
    width: 100%;
    padding: 15px 25px;
    background: rgba(255,255,255,.06);
    float: left
}

.full-menu .bar-menu ul li ul li,.full-menu .bar-menu ul li ul li a {
    border: none
}

.full-menu .bar-menu ul li ul li i {
    margin-right: -25px
}

.full-menu .bar-menu ul li ul li ul {
    width: calc(100% + 50px);
    margin-left: -25px
}

.full-menu .bar-menu ul li.menu-item-has-children {
    position: relative
}

.full-menu .bar-menu ul li.menu-item-has-children a {
    width: auto
}

.full-menu .bar-menu ul li.menu-item-has-children i {
    background-color: #1e2587;
    position: absolute;
    right: 0;
    top: 20px;
    width: 24px
}

.full-menu .button-right a {
    padding: 6px 10px;
    border-radius: 25px;
    width: 100%
}

.full-menu .form-header {
    margin-bottom: 5px;
    border-bottom: 1px solid #202549;
    padding: 0 0 20px
}

.full-menu .bar-menu .menu .sub-menu .item-covid {
    display: none
}

.full-menu .bar-menu .menu .sub-menu .item-assessoria {
    display: none
}

.full-menu .bar-menu ul li a path {
    fill: #fff
}

.full-menu .bar-menu ul li a svg {
    width: 20px;
    height: auto;
    margin-right: 10px
}

.full-menu .bar-menu .acesse a {
    display: flex;
    align-items: center;
    color: #fff;
    font-family: manrope,sans-serif
}

.full-menu .bar-menu .acesse a svg {
    width: 20px;
    height: auto;
    margin-right: 10px
}

.full-menu .bar-menu .acesse a svg path {
    fill: #fff
}

.full-menu .bar-menu .acesse a:hover svg path {
    fill: #53c8ed
}

.full-menu .bar-menu .acesse a:hover {
    color: #53c8ed
}
