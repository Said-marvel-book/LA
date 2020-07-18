var pods = document.getElementById("podstav");
var counter = 0;
var imgslide = document.querySelector(".slide");
var nav = document.querySelector(".nav");
var tup = document.querySelector(".tup");
var photos =[
    {size:[940, 940], text:"Горки - это вещь", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Цветы - очень хороший фон", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Классика. Учитель и ученики.", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Футбольная команда и их тренер", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Горы, горы снега. Никогда такого не видел.", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Как же хорошо на природе!", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Красивая природа", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Такие красивые цветы", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Природа с бассейном", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Красивый вид на город", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Ещё одно групповое селфи", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Горы, горы", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Чёрно-белая фотография Лейлы Алмасовны в подозрительно знакомом месте", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Чёрно-белая фотография Лейлы Алмасовны на подозрительно знакомых качелях", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Очень красивая фотография. Присмотритесь к фону. Я помню этот урок ИЗО.", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Огромный-огромный букет", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Новогодняя фотография двух подруг", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Селфи", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Ещё одно групповое селфи. Я его помню.", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Саидакбар, Лейла Алмасовна и Рухшона", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Лаура Игоревна и Лейла Алмасовна", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Лейла Алмасовна в Самарканде, кажется...", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Лейла Алмасовна и фон водоёма", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Ещё одно красивое селфи", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Селфи и две подруги", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Козим, Жаъфар, Лейла Алмасовна и Рената которая пытается пройти", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Фотография в школе", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Селфи на диване", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Новогоднее селфи и уже три подруги", transform: "rotate(0deg)"},
    {size:[940, 940], text:"-Привет, солнце, - приветствует солнце Лейла Алмасовна. В ответ молчание.", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Лейла Алмасовна и берёзка", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Лейла Алмасовна и фон из зданий", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Селфи с двумя подругами II", transform: "rotate(0deg)"},
    {size:[940, 940], text:"Портрет", transform: "rotate(0deg)"},
    {size:[740, 1040], text:"Жаль, что этот кубок больше не окажется у меня в руках. Но это не про Вас Лейла Алмасовна.", transform: "rotate(0deg)"},
    {size:[740, 1040], text:"Скрытая съёмка", transform: "rotate(0deg)"},
    {size:[940, 740], text:"Ещё одно групповое селфи", transform: "rotate(0deg)"},
    {size:[940, 740], text:"Селфи победителей", transform: "rotate(0deg)"},
{size:[940, 740], text:"Каждый своё. У Рухшоны шоколад. А у Алихана лего.", transform: "rotate(0deg)"},
{size:[790, 1090], text:"Поздравляем. Рогатая Рухшона, Саидахмад и Саидакбар.", transform: "rotate(0deg)"},
{size:[940, 940], text:"Здесь как будто лайки раздавал я. Фотограф точно читает мысли.", transform: "rotate(0deg)"},
{size:[940, 740], text:"Мы были такие маленькие", transform: "rotate(0deg)"},
{size:[940, 740], text:"Медалисты и их тренер", transform: "rotate(0deg)"},
{size:[940, 740], text:"Красивая фотография", transform: "rotate(0deg)"},
{size:[940, 740], text:"Селфи и без меня всё я обижен до следующей фотографии", transform: "rotate(0deg)"},
{size:[940, 740], text:"Апельсинчики...ммм. Мы очень вкусно тогда покушали.", transform: "rotate(0deg)"},
{size:[940, 940], text:"Сумаляк", transform: "rotate(0deg)"},
{size:[940, 740], text:"А теперь группа фото первоклассников", transform: "rotate(0deg)"},
{size:[1040, 700], text:"В наших данных ошибка это не первый класс", transform: "rotate(0deg)"},
{size:[940, 740], text:"А это первый раз в первый класс", transform: "rotate(0deg)"},
{size:[740, 1040], text:"Скрытая съёмка", transform: "rotate(0deg)"},
{size:[1040, 700], text:"Зимнее фото", transform: "rotate(0deg)"}


];
var strr = document.querySelector(".strr");
strr.addEventListener("click", next);
var strl = document.querySelector(".strl");
strl.addEventListener("click", prev);
function next(){
    if(counter == 51){
        imgslide.setAttribute("src", "img/0.jpg");
        imgslide.style.width = photos[0].size[0] + "px";
        imgslide.style.height = photos[0].size[1] + "px";
        tup.textContent = photos[0].text;
        tup.style.color = photos[0].color;
        counter=0;
        imgslide.style.transform = photos[0].transform;
        pods.textContent = counter+1;
        imgslide.addEventListener("click", bolshe);
    }else{
        counter++;
        imgslide.setAttribute("src", "img/" + counter+ ".jpg");
        console.log(counter);
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        imgslide.style.transform = photos[counter].transform;
        pods.textContent = counter+1;
        imgslide.addEventListener("click", bolshe);
}
}
function prev(){
    if(counter == 0){
        counter = 51;
        imgslide.setAttribute("src", "img/" + counter +".jpg");
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[51].text;
        tup.style.color = photos[51].color;
        imgslide.style.transform = photos[51].transform;
        pods.textContent = counter+1;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
    }else{
        counter--;
        imgslide.setAttribute("src", "img/" + counter +".jpg");
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        pods.textContent = counter+1;
        imgslide.style.transform = photos[counter].transform;
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
    }
}
imgslide.addEventListener("click", bolshe);
imgslide.addEventListener("contextmenu", menshe);
function bolshe(){
    imgslide.style.height = photos[counter].size[1] + 10 + "px";
    imgslide.style.width = photos[counter].size[0] + 10 + "px";
    photos[counter].size[0] += 10;
    photos[counter].size[1] += 10;
    
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
}
function menshe(){
    if(photos[counter].size[0] < 30 || photos[counter].size[1] < 30){
        
    }else{
    imgslide.style.height = photos[counter].size[1] - 10 + "px";
    imgslide.style.width = photos[counter].size[0] - 10 + "px";
    photos[counter].size[0] -= 10;
    photos[counter].size[1] -= 10;
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
    }
}