---
title: CRP
---

# CRP (Common Reuse Principle)
> 全再利用の原則  
> パッケージに含まれるすべてのクラスは一緒に再利用される

パッケージには一緒に使われるクラスのみを含めるようにしましょう。そのパッケージの利用者が使わないクラスへの依存を強制させるべきではありません。

:pencil2: **一緒に使われないクラスを同じパッケージに含めない**

## 関連
### [ISP (Interface Segregation Principle)](ISP.md)
利用される場面によってパッケージを分けるという手段が同じです。