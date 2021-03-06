# В задании 1:

- Создан проект shop
- Создан компонент ProductComponent
- Добавлены несколько простых свойств для компонента ProductComponent
- Добавлена кнопка Buy. Реализован обработчик события клик onBuy(), который выводит в консоль сообщение о покупке товара. Реализован функционал по добавлению товара в корзину (optional).
- Создан сервис ProductsService, который возвращает товары. Модель товара описана интерфейсом и классом, который реализует данный интерфейс.
- Создан компонент ProductListComponent. В нем использован сервис ProductsService, данные на станице отображены c помощью директивы \*ngFor.
- Создан компонент cart и использован в AppComponent темплейте. Компонент отображает список купленых товаров. Список организован в виде отдельного сервиса - CartService. Использована директива \*ngIf + else для отображения корзины (CartComponent), если она не пустая. Если корзина пустая отображается другой альтернативный блок с сообщением о пустой корзине.

# В задании 2:

- Созданы модули:
  - AppModule,
  - CartModule,
  - ProductsModule,
  - OrdersModule,
  - SharedModule (то, что много раз используется: компоненты, директивы, пайпы)
- Модифицирован ProductListComponent, который делегирует отображение списка товаров. Создана модель сущности. Реализована возможность добавления товара в корзину (click), если товар есть в наличии (доступен). Товар в корзину добавляет ProductListComponent. ProductComponent реализован как презентационный компонент. Если товара нет, кнопка сделана недоступной.
- Модифицирован CartListComponent, который отображает список купленных товаров. Кроме списка купленных товаров, отображается количество купленных товаров и общую сумму.
- Использованы декораторы: @Input(), @Output().
- Использовано DOM событие click
- Модифицирован сервис (CartService) для предоставления данных компонентам, подсчета суммы.
- Добавлен в разметку AppComponent элемент <h1 #appTitle></h1> с шаблонной переменной. Использован @ViewChild.
- При наведении мышки на пункт списка (CartItem) стилизирован его изменением фона. Для этого создана директива в SharedModule. Использован @HostListener декоратор.

# В задании 4:

- Пайпы применены
  - для форматирования всех цен
  - для форматирования категории в верхний регистр
- метод getProducts() сервиса ProductService изменен так, чтобы он возвращал промис. Применен async пайп для отображения данных, предоставленных сервисом ProductService на странице.
- Создан OrderByPipe, реализована возмомность сортировать массив товаров по цене, количеству, названию c помощью выпадающего списка

# В задании 5:

- Реализован список товаров на /products-list
- Реализована карточку товара, отображение отзывов о товаре в отдельном вспомогательном router-outlet
  /product/:productID
  /product/:productID(feedback:feedback)
- Реализовано добавление в корзину на /cart
- Реализовано удаление из корзины
- Реализовано формирование заказа на /order
- Реализовано админка (добавление/редактирование товара, цены, просмотр заказов).
  /admin
  /admin/products
  /admin/product/add
  /admin/product/edit:productID + resolve guard
  /admin/orders
  Админка защищенаб подгружается динамически, если у пользователя есть право работать как админ с помощью canActivateGuard

# В задании 9:

- Созданы 2 интеграционных юнит теста для тестирования ProductComponent
- Создан изолированный юнит тест для тестирования OrdersService
- Создан изолированный юнит тест для тестирования OrderByPipe
- Создан поверхностный юнит тест для тестирования AppComponent.
  Покрытие на данный момент 63.16%
