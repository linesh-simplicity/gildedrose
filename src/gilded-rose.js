export class GildedRose {
  items

  constructor(items) {
    this.items = items
  }

  update_quality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != 'Aged Brie' &&
        this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (
            this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            if (this.items[i].sell_in < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sell_in < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sell_in = this.items[i].sell_in - 1
      }
      if (this.items[i].sell_in < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (
            this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }
  }
}
