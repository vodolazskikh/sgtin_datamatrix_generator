## Генератор svg datamatrix-a в формате нужном "Честному знаку"

### Как оно работает

Пишем в поле ввода sgtin, а дальше из него собирается валидный код, который Честный знак может принять.

Составные элементы Data Matrix:

идентификатор применения — два символа («01»);

код товара, GTIN — 14 знаков;

идентификатор применения — два символа («21»);

уникальный серийный номер — 13 знаков;

идентификатор применения — два символа («91»);
ключ проверки — 4 знака;

идентификатор применения — два символа («92»);
код проверки — 88 знаков.

### ВАЖНО: Последние два генерируются "от болды", ни в коем случае не используйте тулзу для генерации боевых датаматриксов, она предназначена исключительно для дебага сканирования dataMatrix-ов!!!
