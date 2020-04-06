#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug 28 10:19:12 2019

@author: Felipe Soares
"""

import requests           
import json               
import pandas as pd       
import datetime as dt     
from matplotlib import pyplot as plt 
import numpy as np
import matplotlib.cbook as cbook

criptomoeda = input('========= DataCrypto Analytics =========' 
                    '\n \nDigite o par de criptomoedas listada na Binance:')

print('\nO par de criptomoeda informada foi: %s' 
      '\n\nDataCrypto Analytics esta buscando os valores,' 
      'por favor aguarde alguns segundos!' %(criptomoeda))


root_url = 'https://api.binance.com/api/v1/klines'

symbol = criptomoeda

interval = '1M'

url = root_url + '?symbol=' + symbol + '&interval=' + interval
print(url)

def get_bars(symbol, interval = '1M'):
   url = root_url + '?symbol=' + symbol + '&interval=' + interval
   data = json.loads(requests.get(url).text)
   df = pd.DataFrame(data)
   df.columns = ['open_time',
                 'o', 'h', 'l', 'c', 'v',
                 'close_time', 'qav', 'num_trades',
                 'taker_base_vol', 'taker_quote_vol', 'ignore']
   df.index = [dt.datetime.fromtimestamp(x/1000.0) for x in df.close_time]
   return df

criptomoeda = get_bars(criptomoeda)

criptomoeda_fechamento = criptomoeda['c'].astype('float') 
criptomoeda_abertura = criptomoeda['o'].astype('float') 
criptomoeda_num_trades = criptomoeda['num_trades'].astype('float') 
criptomoeda_maxima = criptomoeda['h'].astype('float')
criptomoeda_minima = criptomoeda['l'].astype('float')
criptomoeda_volume = criptomoeda['v'].astype('float')
criptomoeda_datas_fechamento = criptomoeda['close_time'].astype('float')
criptomoeda_datas_abertura = criptomoeda['open_time'].astype('float')


plt.style.use('ggplot')
criptomoeda_num_trades.plot.bar(color='g', figsize = (18,9))
criptomoeda_fechamento.plot(color='g', figsize = (18,9))
plt.xlabel('Meses')
plt.title('DataCrypto Analytics | Volume de negociações BTCUSDT @Binance')
plt.ylabel('Quantidade')

