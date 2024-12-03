class HealthBar {
    constructor(x, y, w, h, maxHealth, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
        this.visible = true;
    }

    show(context) {
        if (this.visible) {
            // Dessiner le fond noir fixe
            context.fillStyle = "#000"; // Couleur de fond noire
            context.fillRect(this.x, this.y, this.maxWidth, this.h);

            // Dessiner la barre de santé au-dessus du fond
            context.lineWidth = 4;
            context.strokeStyle = "#000";
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.w, this.h);
            context.strokeRect(this.x, this.y, this.maxWidth, this.h);
        }
    }

    updateHealth(val) {
        if (val >= 0) {
            this.health = val;
            this.w = (this.health / this.maxHealth) * this.maxWidth;
        }
    }
    hide() {
        this.visible = false;
    }
}