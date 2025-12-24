document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".AP_Types_Card");
  const overlay = document.querySelector(".AP_Types_Overlay");
  let expandedCard = null;
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  function enableScroll() {
    document.body.style.overflow = "";
  }
  function closeExpandedCard() {
    if (expandedCard) {
      expandedCard.remove();
      overlay.classList.remove("active");
      enableScroll();
      expandedCard = null;
    }
  }
  function isMobileNow() {
    return window.innerWidth <= 991;
  }
  function handleClick(e) {
    if (!isMobileNow()) return;
    e.preventDefault();
    const card = e.currentTarget;
    const cardContent = card.querySelector(".AP_Types_Content");
    card.classList.toggle("open");
    if (card.classList.contains("open")) {
      cardContent.style.display = "block";
    } else {
      cardContent.style.display = "none";
    }
  }
  function handleMouseEnter(e) {
    if (isMobileNow()) return;
    const card = e.currentTarget;
    const cardContent = card.querySelector(".AP_Types_Content");
    const originalHTML = cardContent.innerHTML;
    closeExpandedCard();
    const expanded = document.createElement("div");
    expanded.classList.add("AP_Types_ECard");
    expanded.innerHTML = originalHTML;
    document.body.appendChild(expanded);
    overlay.classList.add("active");
    disableScroll();
    initCardSmoothScroll(expanded);
    expandedCard = expanded;
    function handleMouseMove(ev) {
      const rect = expanded.getBoundingClientRect();
      if (
        ev.clientX < rect.left ||
        ev.clientX > rect.right ||
        ev.clientY < rect.top ||
        ev.clientY > rect.bottom
      ) {
        closeExpandedCard();
        document.removeEventListener("mousemove", handleMouseMove);
        overlay.removeEventListener("mousemove", handleMouseMove);
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
    overlay.addEventListener("mousemove", handleMouseMove);
    overlay.addEventListener(
      "click",
      () => {
        closeExpandedCard();
      },
      { once: true }
    );
  }
  cards.forEach((card) => {
    card.addEventListener("click", handleClick);
    card.addEventListener("mouseenter", handleMouseEnter);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      short: "1990",
      date: "1990-е",
      title: "Первое появление в интернет-пространстве",
      text: `
            <p class="AP_History_P">
              Началом жизни термина «Phishing» можно считать 1994 год, когда группа инициативных хакеров стала выдавать себя за сотрудников «AOL», американской многопрофильной корпорации, поставляющей онлайн-службы, а также электронные доски объявлений. 
              Злоумышленники желали получить доступ к учётным записям и данным кредитных карт пользователей компании, чтобы использовать их аккаунты, а не платить за свои собственные. 
              Со слов 16-летнего хакера Косейлы Рекуш, кто-то из его компании метко назвал процесс выманивания жертвы ловлей рыбы.
            </p>
            <p class="AP_History_P">
              В начале 1995 года Da Chronic (псевдоним Косейлы Рекуш) создал «AOHeLL» — программное обеспечение, которое упрощало начинающим хакерам процесс атаки. 
              Оно содержало фишинговые инструменты, которые позволяли красть пароли и данные кредитных карт с помощью социальной инженерии. 
              Программа отправляла пользователям мгновенные сообщения по типу:
            </p>
            <p class="AP_History_P">
              <em>
                «Здравствуйте, это служба поддержки "AOL". Мы проводим проверку безопасности и должны подтвердить вашу учётную запись. Пожалуйста, введите имя пользователя и пароль, чтобы продолжить.».
              </em>
            </p>
            <p class="AP_History_P">
              В программе были не только инструменты для фишинга. 
              Оно также позволяло засорять почтовый ящик жертвы, что приводило к переполнению.
            </p>
            <p class="AP_History_P">
              Так программа «AOHELL» дала начало жизни фишинговым наборам.
            </p>
        `,
    },
    {
      short: "2000",
      date: "2000-е",
      title: "Организованные схемы и первые крупные потери",
      text: `
            <p class="AP_History_P">
              С ростом интернета развивались и преступные схемы. 
              В начале 2000-х годов фишинг стал массовым явлением. 
              Появилась электронная почта для широкого круга пользователей, сформировался интернет-банкинг, распространились онлайн-платежи — и злоумышленники быстро увидели финансовую выгоду. 
              Они начали рассылать тысячи писем, имитирующих известные бренды, банки и сервисы, уговаривая получателей перейти по ссылке на поддельный сайт. 
              Такие страницы были визуально практически неотличимы от оригинальных, что сильно увеличивало число жертв. 
              В этот период формируется целая криминальная индустрия: создаются вредоносные программы, ботнеты, появляются первые группировки, специализирующиеся на фишинге.
            </p>
        `,
    },
    {
      short: "2010",
      date: "2010-е",
      title: "Усложнение схем атак",
      text: `
            <p class="AP_History_P">
              К 2010-м годам фишинг стал ещё более опасным и умным. 
              Вместо массовых обманных писем преступники начали использовать тонкие методы социальной инженерии. 
              Так возник так называемый spear-phishing — атаки, направленные на конкретных людей и должности. 
              Это уже часть сложных целевых операций, включающих взлом компаний и похищение данных, влияющих на бизнес-процессы и безопасность государств. 
              Параллельно менялись и каналы распространения: фишинг захватил социальные сети, мессенджеры, SMS. 
              Новые вариации — смс-фишинг и вишинг — добавили голосовые звонки и мобильные устройства к арсеналу злоумышленников. 
              Технологический уровень вырос: преступники стали применять HTTPS, взломанные домены, многоступенчатые схемы и тщательно изучать психологию пользователя.
            </p>
        `,
    },
    {
      short: "2020",
      date: "2020-е",
      title: "Увеличение масштабов, появление новых методов",
      text: `
            <p class="AP_History_P">
              На современном этапе, в 2020-е годы, фишинг уже напоминает полноценную криминальную экономику. 
              Появились сервисы, где любой может купить готовый набор для атак, не обладая техническими навыками. 
              Обман стал персонализированным: искусственный интеллект помогает подделывать стиль общения конкретного человека, а технологии deepfake позволяют имитировать голос руководителя компании, чтобы убедить сотрудников перевести деньги или выдать конфиденциальные сведения. 
              Фишинг активно нацеливается на облачные сервисы, обход многофакторной аутентификации и криптовалютные кошельки, пользуясь тем, что новые технологии внедряются быстрее, чем развивается защита.
            </p>
            <p class="AP_History_P">
              История фишинга показывает закономерность: чем больше цифровых сервисов и онлайн-активностей появляется в жизни человека, тем больше возможностей открывается для злоумышленников. 
              При этом основой атак остаётся человеческая доверчивость. 
              Фишинг постоянно меняет форму, но его сущность неизменна: заставить жертву сделать то, что выгодно преступнику. 
              И именно благодаря этой способности адаптироваться он остаётся одной из главных угроз кибербезопасности в мире.
            </p>
        `,
    },
  ];
  const timeline = document.getElementById("AP_History_Timeline");
  const content = document.getElementById("AP_History_Content");
  const contentDate = document.getElementById("AP_History_Date");
  const contentTitle = document.getElementById("AP_History_CTitle");
  const contentText = document.getElementById("AP_History_Text");
  let activeIndex = 0;
  let isAnimating = false;
  function setActive(index) {
    if (index === activeIndex || isAnimating) return;
    isAnimating = true;
    document.querySelectorAll(".AP_History_Point").forEach((p, i) => {
      p.classList.toggle("active", i === index);
    });
    content.classList.remove("AP_History_Fade-In");
    content.classList.add("AP_History_Fade-Out");
    setTimeout(() => {
      contentDate.textContent = data[index].date;
      contentTitle.textContent = data[index].title;
      contentText.innerHTML = data[index].text;
      content.classList.remove("AP_History_Fade-Out");
      content.classList.add("AP_History_Fade-In");
      activeIndex = index;
      isAnimating = false;
    }, 300);
  }
  data.forEach((item, index) => {
    const point = document.createElement("div");
    point.className = "AP_History_Point";
    point.innerHTML = `
      <div class="AP_History_Dot"></div>
      <div class="AP_History_Label">${item.short}</div>
    `;
    point.addEventListener("click", () => setActive(index));
    timeline.appendChild(point);
  });
  document.querySelectorAll(".AP_History_Point")[0].classList.add("active");
  contentDate.textContent = data[0].date;
  contentTitle.textContent = data[0].title;
  contentText.innerHTML = data[0].text;
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

function initCardSmoothScroll(card) {
  let currentScroll = card.scrollTop;
  let targetScroll = currentScroll;
  let isScrolling = false;
  card.addEventListener(
    "wheel",
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      targetScroll += e.deltaY;
      targetScroll = Math.max(
        0,
        Math.min(targetScroll, card.scrollHeight - card.clientHeight)
      );
      if (!isScrolling) smoothCardScroll();
    },
    { passive: false }
  );
  function smoothCardScroll() {
    isScrolling = true;
    currentScroll += (targetScroll - currentScroll) * 0.05;
    card.scrollTop = currentScroll;
    if (Math.abs(targetScroll - currentScroll) > 0.5) {
      requestAnimationFrame(smoothCardScroll);
    } else {
      isScrolling = false;
    }
  }
}

let pageCurrentScroll = window.scrollY;
let pageTargetScroll = pageCurrentScroll;
let pageIsScrolling = false;
window.addEventListener(
  "wheel",
  (e) => {
    if (e.target.closest(".AP_Types_ECard")) return;
    e.preventDefault();
    pageTargetScroll += e.deltaY;
    pageTargetScroll = Math.max(
      0,
      Math.min(
        pageTargetScroll,
        document.documentElement.scrollHeight - window.innerHeight
      )
    );
    if (!pageIsScrolling) smoothPageScroll();
  },
  { passive: false }
);

window.addEventListener("scroll", () => {
  if (!pageIsScrolling) {
    pageCurrentScroll = window.scrollY;
    pageTargetScroll = window.scrollY;
  }
});

function smoothPageScroll() {
  pageIsScrolling = true;
  pageCurrentScroll += (pageTargetScroll - pageCurrentScroll) * 0.05;
  window.scrollTo(0, pageCurrentScroll);

  if (Math.abs(pageTargetScroll - pageCurrentScroll) > 0.5) {
    requestAnimationFrame(smoothPageScroll);
  } else {
    pageIsScrolling = false;
  }
}