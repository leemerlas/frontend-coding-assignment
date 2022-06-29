import random
import json
import requests


def get_fake_name():
    r = requests.get('https://api.namefake.com/')
    return r.json()['name']


def main():
    security_movements = []

    move_types = [
        'Transfer',
        'Redemption',
        'Allotment'
    ]

    for i in range(1, 100):
        trans_type = random.choice(move_types)

        if trans_type == 'Transfer':
            buyer = get_fake_name()
            seller = get_fake_name()
        elif trans_type == 'Redemption':
            buyer = ''
            seller = get_fake_name()
        else:
            seller = ''
            buyer = get_fake_name()

        no_of_units = random.randint(1, 100)
        price_per_unit = random.randint(1, 10)

        security_movements.append({
            'id': i,
            'security_movement_type': trans_type,
            'buyer': buyer,
            'seller': seller,
            'no_of_units': no_of_units,
            'price_per_unit': price_per_unit
        })

    db = {'security_movements': security_movements}

    with open('db.json', 'w') as fp:
        json.dump(db, fp)


if __name__ == "__main__":
    main()
