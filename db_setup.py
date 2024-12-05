import sqlite3

def setup_database():
    # Подключение к базе данных
    conn = sqlite3.connect("chess_game.db")
    cursor = conn.cursor()

    # Создаем таблицу для комнат
    cursor.execute('''
        CREATE TABLE rooms (
    room_code TEXT PRIMARY KEY,
    game_in_progress BOOLEAN,
    player_1 TEXT,
    player_2 TEXT
)
    ''')

    # Создаем таблицу для игроков
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            room_code TEXT NOT NULL,
            FOREIGN KEY (room_code) REFERENCES rooms (room_code)
        )
    ''')

    conn.commit()
    conn.close()

if __name__ == "__main__":
    setup_database()
