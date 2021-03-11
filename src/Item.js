const MAX_QUALITY = 50;

var Item = function(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;

  this.setQuality = function(quality) {
    if (this.isLegendary()) {
      return;
    }
    if (quality > MAX_QUALITY) {
      this.quality = MAX_QUALITY;
      return;
    }
    this.quality = quality;
  }

  this.incrementQuality = function() {
    if (this.isLegendary()) {
      return;
    }
    this.quality = this.quality + 1;
    if (this.quality > MAX_QUALITY) {
      this.quality = MAX_QUALITY;
    }
  }

  this.decrementQuality = function() {
    if (this.isLegendary()) {
      return;
    }
    this.quality = this.quality - 1;
  }

  this.decrementSellIn = function() {
    if (this.isLegendary()) {
      return;
    }
    this.sellIn = this.sellIn - 1;
  }

  this.isBackstagePass = function() {
    return ["Aged Brie", "Backstage passes to a TAFKAL80ETC concert"].includes(this.name);
  }

  this.isLegendary = function() {
    return "Sulfuras, Hand of Ragnaros" === this.name;
  }

  this.isAfterConcertDay = function() {
    return this.sellIn < 0;
  }
};