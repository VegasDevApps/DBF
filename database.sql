USE [DBF]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 18.08.2023 11:25:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Fullname] [nvarchar](100) NOT NULL,
	[QueueId] [int] NOT NULL,
 CONSTRAINT [PK_Customes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Queues]    Script Date: 18.08.2023 11:25:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Queues](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrderInQueue] [int] NOT NULL,
	[InService] [bit] NOT NULL,
	[CheckIn] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Queues] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Queues] ADD  CONSTRAINT [DF_Queues_CheckIn]  DEFAULT (getdate()) FOR [CheckIn]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Queues] FOREIGN KEY([QueueId])
REFERENCES [dbo].[Queues] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Queues]
GO
/****** Object:  StoredProcedure [dbo].[proc_GetCustomerByQueue]    Script Date: 18.08.2023 11:25:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[proc_GetCustomerByQueue]
@OrderInQueue int
AS
	SELECT 
		Customers.Id as CustomerId,
		Customers.Fullname as CustomerFullname,
		Queues.Id as QueueId,
		Queues.OrderInQueue as OrderInQueue,
		Queues.InService as InService,
		Queues.CheckIn as CheckIn
	FROM     
		Customers 
		INNER JOIN Queues ON Customers.QueueId = Queues.Id
	WHERE  (Queues.OrderInQueue = @OrderInQueue)
GO
