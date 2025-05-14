# MHRS Clone (Poliklinik Randevu Sistemi)

Bu proje, bir poliklinik (veya MHRS) randevu sisteminin temelini oluşturan bir Next.js uygulamasıdır. 
Admin panelinden hastane, departman ve doktor eklenebilir.  
Kullanıcılar randevu alabilir ve doktorlar görüntülenebilir.

## 🚀 Başlangıç

### 1. Gerekli Kurulumlar

#### Node.js Kurulumu

Projenin çalışması için Node.js yüklü olmalıdır.  
İndirmek için: [https://nodejs.org/](https://nodejs.org/)

#### XAMPP Kurulumu

Veritabanı olarak MySQL kullanılmıştır.  
XAMPP ile MySQL sunucusunu başlatmanız gerekir.  
İndirmek için: [https://www.apachefriends.org/tr/index.html](https://www.apachefriends.org/tr/index.html)


## 🔗 Projeyi Klonlayın veya İndirin

### 1. Git İle Klonlamak (Tavsiye Edilir)

Eğer bilgisayarınızda Git kuruluysa, terminale (örneğin Git Bash) şu komutu yazın:

```bash
git clone https://github.com/kasimugur/polyclinic_appointment_system_App.git
cd polyclinic_appointment_system_App
```
veya
### 2. ZIP Olarak İndirmek

Alternatif olarak [bu bağlantıdan](https://github.com/kasimugur/polyclinic_appointment_system_App/archive/refs/heads/main.zip) ZIP dosyasını indirip klasöre çıkarabilirsiniz.

---

## ⚙️ Veritabanı Ayarları


- XAMPP'i başlatın ve MySQL sunucusunu çalıştırın.
- phpMyAdmin üzerinden `poliklinikdb` adında yeni bir veritabanı oluşturun.
- Projede `sql/poliklinikdb.sql` adında bir SQL dosyası varsa bunu içeri aktarın.


## 🔐 Ortam Değişkenleri Ayarlama

Proje klasörünün kök dizinine gelin. Burada `.env.example` dosyası var.

### 1. Kopyalayın ve adını değiştirin:
```bash
cp .env.example .env
```

### 2. `.env` içeriği şöyle olmalı (zaten örnek dosyada var):
```env
# Sunucunun hangi portta çalışacağını belirler.
PORT=3000  #varsayılan

# Veritabanı bağlantı bilgileri
DB_HOST=        # Veritabanı sunucusu genelde 'localhost' olur
DB_USER=            # Varsayılan MySQL kullanıcı adı (XAMPP için genelde 'root')
DB_PASSWORD=             # Eğer şifre belirlediysen buraya yaz (boşsa boş bırak)
DB_NAME=    # Kullanacağınız veritabanı adı

# JWT veya oturum işlemlerinde kullanılacak gizli anahtar
SECRET_KEY=!askdfkasdk323?asd*  #örnek uQ7umYWwSKtu?ACnt?3MVj*RaA2V!Zrtz2c!km gibi

```
> Gerekirse `DB_USER`, `DB_PASSWORD` gibi bilgileri kendi ortamınıza göre düzenleyin.

---

## 📦 Paketleri Yükleme

Proje klasöründe terminal açın:

```bash
npm install
```

---

## 🚀 Projeyi Başlatma

```bash
npm run dev
```

Aşağıdaki adresi tarayıcınızda açarak uygulamayı görüntüleyebilirsiniz:

[http://localhost:3000](http://localhost:3000)

> İlk açılışta veritabanıyla bağlantı kurmak için birkaç saniye sürebilir.


admin paneline giriş 
```js
admin@example.com  987321admin
``` 
---


## 📁 Proje Özellikleri

- Admin Dashboard
  - Departman, Doktor, Hastane ekleme
- Kullanıcı paneli
  - Randevu alma ve İptal etme gibi özellikler
  - Kayıt olma
- API ile veri çekme ve gönderme
- Context API kullanımı
- React Hook Form ile form yönetimi
- Shadcn UI bileşenleri

## 🛠 Teknolojiler

- React
- Next.js
- TypeScript
- MySQL
- Axios
- Tailwind CSS
- shadcn/ui

---

## 🧑‍💻 Geliştirici

Kasım Uğur  
Çiftçi 👨‍🌾 | Yazılımcı 👨‍💻 | Girişimci 🚀  
🐄 Projeye katkıda bulunmak istersen iletişime geçebilirsin!

---

## ⚠️ Notlar

- Geliştirme ortamı için önerilen Node.js sürümü: **v18+**
- Veritabanı bağlantısında sorun yaşıyorsanız XAMPP'in MySQL portunun 3306 olduğundan emin olun.