// Знайдіть теги <div>, які стоять безпосередньо після <h3>
// і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

// Завдання виділене вставкою Task3

$(document).ready(function () {
  $("h3").each(function () {
    let $h3 = $(this);

    let $nextDiv = $h3.next("div");

    if ($nextDiv.length) {
      $nextDiv.insertBefore($h3);
    }
  });
});
