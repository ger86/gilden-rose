/*
    2006-30-84
    Leeroy was here!!
    
    Leeroy <lerooy@example.com>
*/
var GildedRose = function () {
  var items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality(items);
};

const THRESHOLD_ONE_FOR_SELL_IN = 10;
const THRESHOLD_TWO_FOR_SELL_IN = 5;

GildedRose.updateQuality = function (items) {
  for (var i = 0; i < items.length; i++) {
    const item = items[i];

    item.decrementSellIn();

    if (item.isBackstagePass()) {
      if (item.isAfterConcertDay()) {
        item.setQuality(0);
      } else {
        item.incrementQuality();
        if (item.sellIn <= THRESHOLD_TWO_FOR_SELL_IN) {
          item.incrementQuality();
        }
        if (item.sellIn <= THRESHOLD_ONE_FOR_SELL_IN) {
          item.incrementQuality();
        }
      }
    } else {
      if (item.isAfterConcertDay()) {
        item.decrementQuality();
        item.decrementQuality();
      } else {
        item.decrementQuality();
      }
    }
  }
  return items;
};
